import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DB_HOST = os.environ.get("API_DB_HOST")
DB_PORT = os.environ.get("API_DB_PORT")
DB_NAME = os.environ.get("API_DB_NAME")
DB_USER = os.environ.get("API_DB_USER")
DB_PASSWORD = os.environ.get("API_DB_PASSWORD")


SQLALCHEMY_DATABASE_URI = (
    f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

engine = create_engine(SQLALCHEMY_DATABASE_URI, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
