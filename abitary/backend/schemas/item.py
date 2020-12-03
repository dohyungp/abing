from pydantic import BaseModel
from typing import Optional


class Item(BaseModel):
    name: str
    price: float
    description: Optional[str] = None
    tax: Optional[float] = None
