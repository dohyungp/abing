from typing import List

from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Allocation
from abing.schemas.allocation import AllocationCreate, AllocationUpdate


class CRUDAllocation(CRUDBase[Allocation, AllocationCreate, AllocationUpdate]):
    def get_list(
        self, db: Session, *, skip: int = 0, limit: int = 100, arm_id: int = None
    ) -> List[Allocation]:
        query = db.query(self.model)
        if arm_id:
            query = query.filter(self.model.arm_id == arm_id)
        return query.offset(skip).limit(limit).all()


allocation = CRUDAllocation(Allocation)
