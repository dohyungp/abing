import os
from typing import Generator, Any, Optional
from fastapi import FastAPI, Request
from fastapi import Depends, HTTPException
from fastapi.staticfiles import StaticFiles

from starlette.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from abing.routes.v1.api import api_router
from abing.core.config import settings
from fastapi.templating import Jinja2Templates

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(api_router, prefix=settings.API_VERSION)

directory = os.path.dirname(__file__)
app.mount("/static", StaticFiles(directory=f"{directory}/static/static"), name="static")
templates = Jinja2Templates(directory=f"{directory}/static")


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
