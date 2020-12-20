from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

from app.models.arm import Arm
from app.schemas.arm import ArmCreate, ArmUpdate


arm = CRUDBase[Arm, ArmCreate, ArmUpdate](Arm)
