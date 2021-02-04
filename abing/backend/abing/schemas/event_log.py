"""EventLog Schema"""
from datetime import datetime
from pydantic import BaseModel


class EventLogBase(BaseModel):
    """EventLog Base Schema"""

    event_id: int
    user_id: str


class EventLogCreate(EventLogBase):
    """EventLog CreateSchema"""

    pass  # pylint: disable=unnecessary-pass


class EventLogUpdate(EventLogBase):
    """EventLog UpdateSchema"""

    pass  # pylint: disable=unnecessary-pass


class EventLogInDBBase(EventLogBase):
    """EventLog ORM Schema"""

    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        """ORM Config Meta Class"""

        orm_mode = True


class EventLog(EventLogInDBBase):
    """EventLog ORM Schema"""

    pass  # pylint: disable=unnecessary-pass


class EventLogInDB(EventLogInDBBase):
    """EventLog ORM Schema"""

    pass  # pylint: disable=unnecessary-pass
