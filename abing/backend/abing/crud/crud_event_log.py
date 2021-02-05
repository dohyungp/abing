from typing import List
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from abing.crud.base import CRUDBase

from abing.db.base import EventLog
from abing.schemas.event_log import EventLogCreate, EventLogUpdate


class CRUDEventLog(CRUDBase[EventLog, EventLogCreate, EventLogUpdate]):
    pass


event_log = CRUDEventLog(EventLog)
