from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel
from .arm import Arm


class ExperimentBase(BaseModel):
    name: str
    description: Optional[str] = None
    is_running: Optional[bool] = False


class ExperimentCreate(ExperimentBase):
    pass


class ExperimentUpdate(ExperimentBase):
    pass


class ExperimentInDBBase(ExperimentBase):
    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class Experiment(ExperimentInDBBase):
    pass


class ExperimentInDB(ExperimentInDBBase):
    pass
