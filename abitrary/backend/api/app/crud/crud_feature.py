from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase

from app.db.base import Feature
from app.schemas.feature import FeatureCreate, FeatureUpdate


feature = CRUDBase[Feature, FeatureCreate, FeatureUpdate](Feature)
