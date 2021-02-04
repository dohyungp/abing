from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

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
    return crud.event.create(db=db, obj_in=event_in)


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
