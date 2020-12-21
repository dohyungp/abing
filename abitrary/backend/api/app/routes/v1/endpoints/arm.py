from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.routes import deps

router = APIRouter()


@router.get("/", response_model=List[schemas.Arm])
async def get_arms(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
):
    arm_list = crud.arm.get_list(db, skip=skip, limit=limit)
    return arm_list


@router.get("/{id}", response_model=schemas.Arm)
async def get_arm(id: int, db: Session = Depends(deps.get_db)) -> Any:
    return crud.arm.get(db=db, id=id)


@router.post("/", response_model=schemas.Arm)
async def create_arm(arm_in: schemas.ArmCreate, db: Session = Depends(deps.get_db)):
    experiment = crud.experiment.get(db=db, id=arm_in.experiment_id)
    if not experiment:
        raise HTTPException(status_code=404, detail="experiment not found")

    arm_in = arm_in.dict()
    features = arm_in.pop("features", [])

    arm = crud.arm.create(db=db, obj_in=arm_in)

    for feature in features:
        feature_in = {**feature, "arm_id": arm.id}
        feature_out = crud.feature.create(db=db, obj_in=feature_in)
    return arm


@router.put("/{id}")
def update_arm(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    arm_in: schemas.ArmUpdate,
) -> Any:

    arm = crud.arm.get(db=db, id=id)
    if not arm:
        raise HTTPException(status_code=404, detail="arm not found")
    arm = crud.arm.update(db=db, db_obj=arm, obj_in=arm_in)
    return arm
