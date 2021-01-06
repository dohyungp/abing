from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel


class ArmBase(BaseModel):
    name: str
    traffic_weight: int


class ArmFeatureCreate(BaseModel):
    key: str
    value: str
    description: Optional[str] = None


class ArmCreate(ArmBase):
    experiment_id: int
    features: Optional[List[ArmFeatureCreate]]


class ArmUpdate(ArmBase):
    name: Optional[str]
    traffic_weight: Optional[int]


class ArmInDBBase(ArmBase):
    id: int
    experiment_id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class ArmFeature(BaseModel):
    key: str
    value: str

    class Config:
        orm_mode = True


class Arm(ArmInDBBase):
    features: Optional[List[ArmFeature]]
    pass


class ArmInDB(ArmInDBBase):
    pass
