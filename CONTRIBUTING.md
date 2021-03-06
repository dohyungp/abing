<p align="center">
    <img src="abing-logo.png">
</p>

---

## Description

AB 테스팅을 위한 Traffic allocation 오픈소스. 

## Stack

FastAPI + uvicorn + PostgreSQL + React + Redux + Redux Saga + Ant.design

## Development

### 환경변수
- ABING_DB
- ABING_DB_USER
- ABING_DB_PASSWORD
- ABING_DB_HOST
- ABING_DB_PORT

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
