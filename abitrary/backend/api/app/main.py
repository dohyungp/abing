from typing import Generator, Any, Optional
from fastapi import FastAPI, Request
from fastapi import Depends, HTTPException
from fastapi.staticfiles import StaticFiles

from starlette.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from app.routes.v1.api import api_router
from app.core.config import settings
from fastapi.templating import Jinja2Templates

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_router, prefix=settings.API_VERSION)

app.mount("/static", StaticFiles(directory="app/static/static"), name="static")
templates = Jinja2Templates(directory="app/static")


@app.route("/{paths:path}")
async def serve(request: Request, paths: Optional[str] = None):
    return templates.TemplateResponse("index.html", {"request": request})


# NOTE: Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
