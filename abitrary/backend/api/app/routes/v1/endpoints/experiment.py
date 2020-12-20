from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.routes import deps

router = APIRouter()


@router.get("/experiments/")
async def get_experiments(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
):
    return crud.experiment.get_list(db, skip=skip, limit=limit)


@router.get("/experiments/{id}")
async def get_experiment(id: int, db: Session = Depends(deps.get_db)) -> Any:
    return crud.experiment.get(db=db, id=id)


@router.post("/experiments/")
async def create_experiment(
    experiment_in: schemas.ExperimentCreate, db: Session = Depends(deps.get_db)
):
    return crud.experiment.create(db=db, obj_in=experiment_in)


@router.put("/experiements/{id}")
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
