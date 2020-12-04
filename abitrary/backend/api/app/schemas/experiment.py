from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel
from .arm import Arm


class ExperimentBase(BaseModel):
    name: str
    description: Optional[str] = None


class Experiment(ExperimentBase):
    id: int
    is_running: bool
    arms: List[Arm] = list()
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None

    class Config:
        orm_mode = True
