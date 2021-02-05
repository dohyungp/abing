from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from abing import crud, models, schemas
from abing.routes import deps

router = APIRouter()


@router.get("/", response_model=List[schemas.Event])
async def get_events(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_active_user),
):
    return crud.event.get_list(db, skip=skip, limit=limit)


@router.get("/{id}", response_model=schemas.Event)
async def get_event(
    id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    return crud.event.get(db=db, id=id)


@router.post("/", response_model=schemas.Event)
async def create_event(
    event_in: schemas.EventCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
):
    try:
        event = crud.event.create(db=db, obj_in=event_in)
    except IntegrityError as unique_exception:
        raise HTTPException(
            status_code=400, detail="Event already exists"
        ) from unique_exception
    return event


@router.post("/track", response_model=schemas.EventLog)
async def create_event_log(
    eventlog_in: schemas.EventLogRequest,
    db: Session = Depends(deps.get_db),
):
    # FIXME: Move to pydantic vaildator
    if eventlog_in.event and eventlog_in.event_id:
        raise HTTPException(status_code=400, detail="Choose event or event id only")
    elif not (eventlog_in.event or eventlog_in.event_id):
        raise HTTPException(status_code=400, detail="Event name is required")

    event = crud.event.get(db=db, id=eventlog_in.event_id, event_name=eventlog_in.event)
    if not event:
        raise HTTPException(status_code=404, detail="event not found")
    new_eventlog_in = schemas.EventLogCreate(
        event_id=event.id, user_id=eventlog_in.user_id
    )
    print(new_eventlog_in)
    return crud.event_log.create(db=db, obj_in=new_eventlog_in)


@router.put("/{id}", response_model=schemas.Event)
def update_event(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    event_in: schemas.EventUpdate,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    event = crud.event.get(db=db, id=id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    event = crud.event.update(db=db, db_obj=event, obj_in=event_in)
    return event


@router.delete("/{id}")
def delete_event(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    event = crud.event.get(db=db, id=id)
    if not event:
        raise HTTPException(status_code=404, detail="event not found")
    event = crud.event.remove(db=db, id=id)
    return {
        "event_id": id,
        "message": f"event {id} is removed",
    }
