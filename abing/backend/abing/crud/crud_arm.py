from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Arm
from abing.schemas.arm import ArmCreate, ArmUpdate


class CRUDArm(CRUDBase[Arm, ArmCreate, ArmUpdate]):
    def get_list(
        self, db: Session, *, skip: int = 0, limit: int = 100, experiment_id: int = None
    ) -> List[Arm]:
        query = db.query(self.model)
        if experiment_id:
            query = query.filter(self.model.experiment_id == experiment_id)
        return query.offset(skip).limit(limit).all()


arm = CRUDArm(Arm)
