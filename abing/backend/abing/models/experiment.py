from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from abing.db.base_class import Base

if TYPE_CHECKING:
    from .arm import Arm  # noqa: F401


class Experiment(Base):

    __tablename__ = "experiments"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(200), index=True)
    is_running = Column(Boolean(), default=False)
    description = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    # NOTE: Arm 순서는 Immutable해야 함.
    arms = relationship(
        "Arm", order_by="Arm.id", back_populates="experiment", cascade="all,delete"
    )
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
