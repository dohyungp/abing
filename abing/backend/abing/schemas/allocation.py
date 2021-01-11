from datetime import datetime
from pydantic import BaseModel


class AllocationBase(BaseModel):
    arm_id: int
    user_id: str


class AllocationCreate(AllocationBase):
    pass


class AllocationUpdate(AllocationBase):
    pass


class AllocationInDBBase(AllocationBase):
    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        orm_mode = True


class Allocation(AllocationInDBBase):
    pass


class AllocationInDB(AllocationInDBBase):
    pass
