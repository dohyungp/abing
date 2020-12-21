from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel


class ArmBase(BaseModel):
    name: str
    traffic_weight: int
    experiment_id: int


class ArmFeatureCreate(BaseModel):
    key: str
    value: str
    description: Optional[str] = None


class ArmCreate(ArmBase):
    features: Optional[List[ArmFeatureCreate]]


class ArmUpdate(ArmBase):
    pass


class ArmInDBBase(ArmBase):
    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class Arm(ArmInDBBase):
    features: Optional[List]
    pass


class ArmInDB(ArmInDBBase):
    pass
