from typing import Generator, Any
from fastapi import FastAPI
from fastapi import Depends, HTTPException

from sqlalchemy.orm import Session

from app.routes.v1.api import api_router
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_router, prefix=settings.API_VERSION)
