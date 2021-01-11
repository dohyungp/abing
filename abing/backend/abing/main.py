import os
from typing import Generator, Any, Optional
from fastapi import FastAPI, Request
from fastapi import Depends, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from starlette.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from abing.routes.v1.api import api_router
from abing.core.config import settings
from abing.core.exceptions import SentryNotFoundException

try:
    import sentry_sdk
    from sentry_sdk.integrations.asgi import SentryAsgiMiddleware
except (ModuleNotFoundError, ImportError):
    if settings.SENTRY_DSN is not None:
        # NOTE: future should change custom exception.
        raise SentryNotFoundException(
            "For using sentry, please install sentry sdk(simply you could install via pip install abing[sentry])."
        )

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

# NOTE: Sentry configuration should place in last.
if settings.SENTRY_DSN:
    sentry_sdk.init(
        dsn=settings.SENTRY_DSN,
        traces_sample_rate=1.0,
    )
    app = SentryAsgiMiddleware(app)
