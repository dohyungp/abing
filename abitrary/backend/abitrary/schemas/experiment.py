from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel
from .arm import Arm


class ExperimentBase(BaseModel):
    name: str
    description: Optional[str] = None
    is_running: Optional[bool] = False
    start_date: Optional[datetime]
    end_date: Optional[datetime]


class ExperimentCreate(ExperimentBase):
    pass


class ExperimentUpdate(ExperimentBase):
    name: Optional[str]
    description: Optional[str]
    is_running: Optional[bool]
    start_date: Optional[datetime]
    end_date: Optional[datetime]


class ExperimentInDBBase(ExperimentBase):
    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class Experiment(ExperimentInDBBase):
    arms: Optional[List[Arm]]
    pass


class ExperimentInDB(ExperimentInDBBase):
    pass
