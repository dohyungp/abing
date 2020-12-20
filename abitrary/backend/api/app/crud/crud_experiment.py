from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

from app.models.experiment import Experiment
from app.schemas.experiment import ExperimentCreate, ExperimentUpdate


experiment = CRUDBase[Experiment, ExperimentCreate, ExperimentUpdate](Experiment)
