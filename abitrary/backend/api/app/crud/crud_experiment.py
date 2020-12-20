from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

from app.db.base import Experiment
from app.schemas.experiment import ExperimentCreate, ExperimentUpdate

from app.services.route_service import HashRouter


class CRUDExperiment(CRUDBase[Experiment, ExperimentCreate, ExperimentUpdate]):
    def get_list_by_running_state(self, db: Session, *, is_running: bool):
        return db.query(self.model).filter(self.model.is_running == is_running).all()


experiment = CRUDExperiment(Experiment)
