from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

# FIXME: app.models.experiment에서 import할 경우 Circular imports error
from app.db.base import Experiment
from app.schemas.experiment import ExperimentCreate, ExperimentUpdate


experiment = CRUDBase[Experiment, ExperimentCreate, ExperimentUpdate](Experiment)
