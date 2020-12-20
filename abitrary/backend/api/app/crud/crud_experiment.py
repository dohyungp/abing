from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

from app.db.base import Experiment
from app.schemas.experiment import ExperimentCreate, ExperimentUpdate

from app.services.route_service import HashRouter


experiment = CRUDBase[Experiment, ExperimentCreate, ExperimentUpdate](Experiment)
