from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base import Base


class Feature(Base):

    __tablename__ = "features"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    key = Column(String(200), index=True)
    value = Column(String)
    description = Column(String)
    arm_id = Column(Integer, ForeignKey("arms.id"), nullable=False)
    arm = relationship("Arm", back_populates="features")
