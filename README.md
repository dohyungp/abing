<p align="center">
    <img src="abitrary-logo.png">
</p>

---

## Stack

FastAPI + uvicorn + PostgreSQL ~~+ React + Redux + Redux Saga + Ant.design~~

## Development

### 환경변수
- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_HOST
- POSTGRES_PORT

### 환경 실행
```sh
$ docker-compose up -d
```

### 환경 종료
```sh
$ docker-compose down --volume --remove-orphans
```

### DB 마이그레이션

Head로 upgrade할 경우

```sh
$ docker-compose run backend alembic upgrade head
```

### DB Schema 변경

```sh
docker-compose run backend alembic revision --autogenerate -m "Commit Message"
```

### API Swagger

1. (default swagger)[localhost:8000/docs]
2. (redoc)[localhost:8000/redoc]
