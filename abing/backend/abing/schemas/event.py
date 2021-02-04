"""Event Schema"""
from typing import Optional
from datetime import datetime
from pydantic import BaseModel


class EventBase(BaseModel):
    """Event Base Schema"""

    name: str
    description: Optional[str] = None
    is_used: Optional[bool] = False


class EventCreate(EventBase):
    """Event CreateSchema"""

    pass  # pylint: disable=unnecessary-pass


class EventUpdate(EventBase):
    """Event UpdateSchema"""

    name: Optional[str]
    description: Optional[str]
    is_used: Optional[bool]


class EventInDBBase(EventBase):
    """Event ORM Schema"""

    id: int
    time_created: datetime
    time_updated: datetime

    class Config:
        """Event ORM Config Meta Class"""

        orm_mode = True


class Event(EventInDBBase):
    """Event Schema"""

    pass  # pylint: disable=unnecessary-pass


class EventInDB(EventInDBBase):
    """Event Schema"""

    pass  # pylint: disable=unnecessary-pass
