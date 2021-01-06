from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Feature
from abing.schemas.feature import FeatureCreate, FeatureUpdate


class CRUDFeature(CRUDBase[Feature, FeatureCreate, FeatureUpdate]):
    def get_list(
        self, db: Session, *, skip: int = 0, limit: int = 100, arm_id: int = None
    ) -> List[Feature]:
        query = db.query(self.model)
        if arm_id:
            query = query.filter(self.model.arm_id == arm_id)
        return query.offset(skip).limit(limit).all()


feature = CRUDFeature(Feature)
