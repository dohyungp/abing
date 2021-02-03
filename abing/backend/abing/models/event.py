"""Event model"""
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from abing.db.base_class import Base


class Event(Base):
    """Event Table Model"""

    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(200), index=True, unique=True)
    is_used = Column(Boolean(), default=False)
    description = Column(String)
    logs = relationship("EventLog", back_populates="event", cascade="all,delete")
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
