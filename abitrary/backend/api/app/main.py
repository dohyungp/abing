from typing import Generator, Any
from fastapi import FastAPI
from fastapi import Depends, HTTPException
from fastapi.staticfiles import StaticFiles

from starlette.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from app.routes.v1.api import api_router
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_router, prefix=settings.API_VERSION)
app.mount("/", StaticFiles(directory="app/static", html=True), name="static")

# NOTE: Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
