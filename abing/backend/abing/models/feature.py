from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from abing.db.base_class import Base

if TYPE_CHECKING:
    from .arm import Arm  # noqa: F401


class Feature(Base):

    __tablename__ = "features"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    key = Column(String(200), index=True)
    value = Column(String)
    description = Column(String)
    arm_id = Column(Integer, ForeignKey("arms.id"), nullable=False)
    arm = relationship("Arm", back_populates="features")
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
