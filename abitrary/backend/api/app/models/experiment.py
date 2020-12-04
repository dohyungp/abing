from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship

from app.db.base import Base

if TYPE_CHECKING:
    from .arm import Arm  # noqa: F401


class Experiment(Base):
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(200), index=True)
    is_running = Column(Boolean(), default=False)
    description = Column(String, null=True)
    start_date = Column(DateTime, null=True)
    end_date = Column(DateTime, null=True)
    # NOTE: Arm 순서는 Immutable해야 함.
    arms = relationship("Arm", order_by="Arm.id", back_populates="experiment")
