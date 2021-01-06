from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel


class FeatureBase(BaseModel):
    key: str
    value: str
    arm_id: int
    description: Optional[str] = None


class FeatureCreate(FeatureBase):
    pass


class FeatureUpdate(FeatureBase):
    pass


class FeatureInDBBase(FeatureBase):
    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class Feature(FeatureInDBBase):
    pass


class FeatureInDB(FeatureInDBBase):
    pass
