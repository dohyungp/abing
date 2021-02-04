from typing import List

from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import Event
from abing.schemas.event import EventCreate, EventUpdate


class CRUDEvent(CRUDBase[Event, EventCreate, EventUpdate]):
    pass


event = CRUDEvent(Event)
