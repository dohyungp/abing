from typing import Optional

from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Event
from abing.schemas.event import EventCreate, EventUpdate


class CRUDEvent(CRUDBase[Event, EventCreate, EventUpdate]):
    def get(
        self,
        db: Session,
        id: Optional[int] = None,
        event_name: Optional[str] = None,
    ) -> Optional[Event]:
        return (
            db.query(self.model)
            .filter((self.model.id == id) | (self.model.name == event_name))
            .first()
        )


event = CRUDEvent(Event)
