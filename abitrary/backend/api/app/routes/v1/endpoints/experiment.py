from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.routes import deps

from app.services.route_service import HashRouter

router = APIRouter()


@router.get("/", response_model=List[schemas.Experiment])
async def get_experiments(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
):
    return crud.experiment.get_list(db, skip=skip, limit=limit)


@router.get("/route", response_model=List[schemas.Arm])
async def select_arms_by_experiments(
    db: Session = Depends(deps.get_db), *, user_id: str
):
    traffic_router = HashRouter(user_id)
    experiments = crud.experiment.get_list_by_running_state(db, is_running=True)
    selected_arms = list()

    if not experiments:
        raise HTTPException(
            status_code=404, detail="There are no experiments in the requested state"
        )

    for experiment in experiments:
        if len(experiment.arms) < 2:
            continue

        arm = traffic_router.route(experiment)
        selected_arms.append(arm)

    return selected_arms


@router.get("/{id}", response_model=schemas.Experiment)
async def get_experiment(id: int, db: Session = Depends(deps.get_db)) -> Any:
    return crud.experiment.get(db=db, id=id)


@router.get("/{id}/route", response_model=schemas.Arm)
async def select_arm_by_experiment(
    id: int, user_id: str, db: Session = Depends(deps.get_db)
):
    experiment = crud.experiment.get(db=db, id=id)

    if not experiment:
        raise HTTPException(status_code=404, detail="Experiment not found")
    elif len(experiment.arms) < 2:
        raise HTTPException(
            status_code=404,
            detail="Experiment arms are not set. Must required arm list at least 2.",
        )

    traffic_router = HashRouter(user_id)
    arm = traffic_router.route(experiment)
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
