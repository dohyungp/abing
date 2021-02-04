from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from abing.db.base_class import Base

if TYPE_CHECKING:
    from .arm import Arm  # noqa: F401


class Allocation(Base):

    __tablename__ = "allocations"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    arm_id = Column(Integer, ForeignKey("arms.id"), nullable=False)
    arm = relationship("Arm", back_populates="allocations")
    user_id = Column(String, nullable=False)
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
