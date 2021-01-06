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

    ABING_DB_HOST: str
    ABING_DB_USER: str
    ABING_DB_PASSWORD: str
    ABING_DB: str
    ABING_DB_PORT: str = "5432"
    SQLALCHEMY_DATABASE_URI: Optional[PostgresDsn] = None

    @validator("SQLALCHEMY_DATABASE_URI", pre=True)
    def assemble_db_connection(
        cls, v: Optional[str], values: Dict[str, Any]  # noqa
    ) -> Any:
        if isinstance(v, str):
            return v
        return PostgresDsn.build(
            scheme="postgresql",
            user=values.get("ABING_DB_USER"),
            password=values.get("ABING_DB_PASSWORD"),
            host=values.get("ABING_DB_HOST"),
            port=values.get("ABING_DB_PORT"),
            path=f"/{values.get('ABING_DB', '')}",
        )

    class Config:
        case_sensitive = False


settings = Settings()
