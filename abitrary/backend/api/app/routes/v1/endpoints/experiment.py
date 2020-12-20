from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.routes import deps

from app.services.route_service import HashRouter

router = APIRouter()


@router.get("/")
async def get_experiments(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
):
    return crud.experiment.get_list(db, skip=skip, limit=limit)


@router.get("/{id}")
async def get_experiment(id: int, db: Session = Depends(deps.get_db)) -> Any:
    return crud.experiment.get(db=db, id=id)


@router.get("/{id}/route")
async def get_selected_arm_by_experiment(
    id: int, user_id: str, db: Session = Depends(deps.get_db)
):
    if user_id is None:
        raise HTTPException(status_code=400, detail="User id is required")

    experiment = crud.experiment.get(db=db, id=id)
    if not experiment:
        raise HTTPException(status_code=404, detail="Experiment not found")

    router = HashRouter(user_id)
    arm = router.route(experiment)
    return arm


@router.post("/")
async def create_experiment(
    experiment_in: schemas.ExperimentCreate, db: Session = Depends(deps.get_db)
):
    return crud.experiment.create(db=db, obj_in=experiment_in)


@router.put("/{id}")
def update_experiment(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    experiment_in: schemas.ExperimentUpdate,
) -> Any:

    experiment = crud.experiment.get(db=db, id=id)
    if not experiment:
        raise HTTPException(status_code=404, detail="Experiment not found")
    experiment = crud.experiment.update(db=db, db_obj=experiment, obj_in=experiment_in)
    return experiment
