from fastapi import APIRouter
from abing.routes.v1.endpoints import experiment, arm, feature, user, login

api_router = APIRouter()


api_router = APIRouter()
api_router.include_router(login.router, tags=["Login"])
api_router.include_router(user.router, prefix="/users", tags=["users"])
api_router.include_router(
    experiment.router, prefix="/experiments", tags=["Experiments"]
)
api_router.include_router(arm.router, prefix="/arms", tags=["Arms"])
api_router.include_router(feature.router, prefix="/features", tags=["Features"])
