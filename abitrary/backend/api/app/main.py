from typing import Generator, Any
from fastapi import FastAPI
from fastapi import Depends

from sqlalchemy.orm import Session

from app import crud, schemas
from app.db.session import SessionLocal

app = FastAPI()


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.get("/experiments/")
async def get_experiments(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
):
    return crud.experiment.get_multi(db, skip=skip, limit=limit)


@app.get("/experiments/{id}")
async def get_experiment(id: int, db: Session = Depends(get_db)) -> Any:
    return crud.experiment.get(db=db, id=id)


@app.post("/experiments/")
async def create_experiment(
    experiment_in: schemas.ExperimentCreate, db: Session = Depends(get_db)
):
    return crud.experiment.create(db=db, obj_in=experiment_in)
