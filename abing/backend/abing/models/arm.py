from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from abing.db.base_class import Base

if TYPE_CHECKING:
    from .experiment import Experiment  # noqa: F401
    from .feature import Feature  # noqa: F401


class Arm(Base):

    __tablename__ = "arms"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(150), index=True)
    # NOTE: 실험 런칭 시 반영되는 가중치(e.g A가 100이고 B가 20이면 A는 100/120으로 트래픽 전달, B는 20/120으로 트래픽 전달)
    traffic_weight = Column(Integer, nullable=False)
    experiment_id = Column(Integer, ForeignKey("experiments.id"), nullable=False)
    experiment = relationship("Experiment", back_populates="arms")
    features = relationship("Feature", back_populates="arm", cascade="all,delete")
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    time_updated = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
