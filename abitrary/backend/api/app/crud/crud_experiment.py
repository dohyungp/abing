from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

from app.db.base import Experiment
from app.schemas.experiment import ExperimentCreate, ExperimentUpdate

from app.services.route_service import HashRouter


class CRUDExperiment(CRUDBase[Experiment, ExperimentCreate, ExperimentUpdate]):
    def get_selected_arm_by_experiment(self, db: Session, id: int, user_id: str):
        router = HashRouter(user_id)
        experiment = db.query(self.model).filter(self.model.id == id).first()
        return router.route(experiment)


experiment = CRUDExperiment(Experiment)
