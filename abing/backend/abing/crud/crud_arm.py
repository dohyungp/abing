from typing import List, Optional

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Arm, Allocation, Experiment
from abing.schemas.arm import ArmCreate, ArmUpdate


class CRUDArm(CRUDBase[Arm, ArmCreate, ArmUpdate]):
    def get_list(
        self, db: Session, *, skip: int = 0, limit: int = 100, experiment_id: int = None
    ) -> List[Arm]:
        query = db.query(self.model)
        if experiment_id:
            query = query.filter(self.model.experiment_id == experiment_id)
        return query.offset(skip).limit(limit).all()

    def get_from_experiment(
        self, db: Session, *, user_id: int, experiment: Experiment
    ) -> Optional[Arm]:
        return (
            db.query(self.model)
            .join(Allocation)
            .filter(Allocation.user_id == user_id)
            .join(Experiment)
            .filter(Experiment.id == experiment.id)
            .first()
        )


arm = CRUDArm(Arm)
