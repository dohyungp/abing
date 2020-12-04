from pydantic import BaseModel


class ArmBase(BaseModel):
    name: str


class Arm(ArmBase):
    id: int
