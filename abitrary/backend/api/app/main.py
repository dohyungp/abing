from typing import Generator
from fastapi import FastAPI
from fastapi import Depends

from sqlalchemy.orm import Session

from app import crud, schemas
from app.db.session import SessionLocal
from app.schemas.item import Item

app = FastAPI()


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.post("/items/")
async def create_item(item: Item):
    item_dict = item.dict()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict


@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    return {"item_id": item_id, **item.dict()}


@app.post("/experiments/")
async def create_experiment(
    experiment_in: schemas.ExperimentCreate, db: Session = Depends(get_db)
):
    return crud.experiment.create(db=db, obj_in=experiment_in)


@app.get("/experiments/")
async def get_experiments(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
):
    return crud.experiment.get_multi(db, skip=skip, limit=limit)
