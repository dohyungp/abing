from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from abing import crud, models, schemas
from abing.routes import deps

router = APIRouter()


@router.get("/")
async def get_allocations(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    arm_id: Optional[int] = None,
    current_user: models.User = Depends(deps.get_current_active_user),
):
    return crud.allocation.get_list(db, skip=skip, limit=limit, arm_id=arm_id)


@router.get("/{id}")
async def get_allocation(
    id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    return crud.allocation.get(db=db, id=id)


@router.delete("/{id}")
def delete_allocation(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:

    allocation = crud.allocation.get(db=db, id=id)
    arm_id = allocation.arm_id
    if not allocation:
        raise HTTPException(status_code=404, detail="allocation not found")
    allocation = crud.allocation.remove(db=db, id=id)
    return {
        "allocation_id": id,
        "arm_id": arm_id,
        "message": f"allocation {id} is removed",
    }
