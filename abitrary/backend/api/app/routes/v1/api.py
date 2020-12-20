from fastapi import APIRouter
from app.routes.v1.endpoints import experiment, arm

api_router = APIRouter()


api_router = APIRouter()
api_router.include_router(
    experiment.router, prefix="/experiments", tags=["Experiments"]
)
api_router.include_router(arm.router, prefix="/arms", tags=["Arms"])
