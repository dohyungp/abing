from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.routes import deps

router = APIRouter()


@router.get("/")
async def get_arms(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
):
    return crud.arm.get_list(db, skip=skip, limit=limit)


@router.get("/{id}")
async def get_arm(id: int, db: Session = Depends(deps.get_db)) -> Any:
    return crud.arm.get(db=db, id=id)


@router.post("/")
async def create_arm(arm_in: schemas.ArmCreate, db: Session = Depends(deps.get_db)):
    experiment = crud.experiment.get(db=db, id=arm_in.experiment_id)
    if not experiment:
        raise HTTPException(status_code=404, detail="experiment not found")
    return crud.arm.create(db=db, obj_in=arm_in)


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
