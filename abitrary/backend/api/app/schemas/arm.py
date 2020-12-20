from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel


class ArmBase(BaseModel):
    name: str
    traffic_weight: int


class ArmCreate(ArmBase):
    pass


class ArmUpdate(ArmBase):
    pass


class ArmInDBBase(ArmBase):
    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class Arm(ArmInDBBase):
    pass


class ArmInDB(ArmInDBBase):
    pass
