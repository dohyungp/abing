from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Experiment
from abing.schemas.experiment import ExperimentCreate, ExperimentUpdate

from abing.services.route_service import HashRouter


class CRUDExperiment(CRUDBase[Experiment, ExperimentCreate, ExperimentUpdate]):
    def get_list(
        self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> List[Experiment]:
        return (
            db.query(self.model)
            .order_by(
                self.model.is_running.desc(),
                self.model.time_updated.desc(),
                self.model.time_created.desc(),
            )
            .offset(skip)
            .limit(limit)
            .all()
        )

    def get_list_by_running_state(self, db: Session, *, is_running: bool):
        return db.query(self.model).filter(self.model.is_running == is_running).all()


experiment = CRUDExperiment(Experiment)
