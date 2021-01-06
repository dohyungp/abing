from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship

from abing.db.base_class import Base


class User(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    is_active = Column(Boolean(), default=True)
    is_superuser = Column(Boolean(), default=False)
