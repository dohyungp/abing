from typing import Any, List, Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from abing import crud, models, schemas
from abing.routes import deps

router = APIRouter()


@router.get("/", response_model=List[schemas.Arm])
async def get_arms(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    experiment_id: Optional[int] = None,
    current_user: models.User = Depends(deps.get_current_active_user),
):
    arm_list = crud.arm.get_list(
        db, skip=skip, limit=limit, experiment_id=experiment_id
    )
    return arm_list


@router.get("/{id}", response_model=schemas.Arm)
async def get_arm(
    id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    return crud.arm.get(db=db, id=id)


@router.post("/", response_model=schemas.Arm)
async def create_arm(
    arm_in: schemas.ArmCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
):
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


@router.post("/bulk", response_model=List[schemas.Arm])
async def create_arms(
    arms_in: List[schemas.ArmCreate],
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
):

    created_arms = list()
    for arm_in in arms_in:
        experiment = crud.experiment.get(db=db, id=arm_in.experiment_id)

        if not experiment:
            raise HTTPException(status_code=404, detail="experiment not found")

        arm_in = arm_in.dict()
        features = arm_in.pop("features", []) or []
        arm = crud.arm.create(db=db, obj_in=arm_in)

        for feature in features:
            feature_in = {**feature, "arm_id": arm.id}
            feature_out = crud.feature.create(db=db, obj_in=feature_in)

        created_arms.append(arm)
    return created_arms


@router.put("/{id}")
def update_arm(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    arm_in: schemas.ArmUpdate,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    arm = crud.arm.get(db=db, id=id)
    if not arm:
        raise HTTPException(status_code=404, detail="arm not found")
    arm = crud.arm.update(db=db, db_obj=arm, obj_in=arm_in)
    return arm


@router.delete("/{id}")
def delete_arm(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    arm = crud.arm.get(db=db, id=id)
    experiment_id = arm.experiment_id
    if not arm:
        raise HTTPException(status_code=404, detail="arm not found")
    crud.arm.remove(db=db, id=id)
    return {
        "message": f"Arm {id} is removed!",
        "type": "arm",
        "arm_id": id,
        "experiment_id": experiment_id,
    }
