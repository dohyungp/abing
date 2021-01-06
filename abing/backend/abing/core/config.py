from typing import Optional, Dict, Any

import secrets
from pydantic import BaseSettings, PostgresDsn, validator


class Settings(BaseSettings):

    PROJECT_NAME: str = "abing"
    API_VERSION: str = "/api/v1"

    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
    TOKEN_SCHEME: str = "bearer"
    USERS_OPEN_REGISTRATION: bool = False

    POSTGRES_HOST: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_PORT: str = "5432"
    SQLALCHEMY_DATABASE_URI: Optional[PostgresDsn] = None

    @validator("SQLALCHEMY_DATABASE_URI", pre=True)
    def assemble_db_connection(
        cls, v: Optional[str], values: Dict[str, Any]  # noqa
    ) -> Any:
        if isinstance(v, str):
            return v
        return PostgresDsn.build(
            scheme="postgresql",
            user=values.get("POSTGRES_USER"),
            password=values.get("POSTGRES_PASSWORD"),
            host=values.get("POSTGRES_HOST"),
            port=values.get("POSTGRES_PORT"),
            path=f"/{values.get('POSTGRES_DB', '')}",
        )

    class Config:
        case_sensitive = False


settings = Settings()
