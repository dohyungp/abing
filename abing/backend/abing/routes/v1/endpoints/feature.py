from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from abing import crud, models, schemas
from abing.routes import deps

router = APIRouter()


@router.get("/")
async def get_features(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    arm_id: Optional[int] = None,
    current_user: models.User = Depends(deps.get_current_active_user),
):
    return crud.feature.get_list(db, skip=skip, limit=limit, arm_id=arm_id)


@router.get("/{id}")
async def get_feature(
    id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    return crud.feature.get(db=db, id=id)


@router.post("/")
async def create_feature(
    feature_in: schemas.FeatureCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
):
    arm = crud.arm.get(db=db, id=feature_in.arm_id)
    if not arm:
        raise HTTPException(status_code=404, detail="Arm not found")
    return crud.feature.create(db=db, obj_in=feature_in)


@router.post("/bulk", response_model=List[schemas.Feature])
async def create_features(
    features_in: List[schemas.FeatureCreate],
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
):

    created_features = list()
    for feature_in in features_in:
        arm = crud.arm.get(db=db, id=feature_in.arm_id)

        if not arm:
            raise HTTPException(status_code=404, detail="arm not found")

        feature = crud.feature.create(db=db, obj_in=feature_in)
        created_features.append(feature)
    return created_features


@router.put("/{id}")
def update_feature(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    feature_in: schemas.FeatureUpdate,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    feature = crud.feature.get(db=db, id=id)
    if not feature:
        raise HTTPException(status_code=404, detail="Feature not found")
    feature = crud.feature.update(db=db, db_obj=feature, obj_in=feature_in)
    return feature


@router.delete("/{id}")
def delete_feature(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    feature = crud.feature.get(db=db, id=id)
    arm_id = feature.arm_id
    if not feature:
        raise HTTPException(status_code=404, detail="Feature not found")
    feature = crud.feature.remove(db=db, id=id)
    return {"feature_id": id, "arm_id": arm_id, "message": f"Feature {id} is removed"}
