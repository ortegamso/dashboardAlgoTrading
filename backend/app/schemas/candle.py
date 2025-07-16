from pydantic import BaseModel
from datetime import datetime

class CandleBase(BaseModel):
    timestamp: datetime
    open: float
    high: float
    low: float
    close: float
    volume: float

class CandleCreate(CandleBase):
    pass

class Candle(CandleBase):
    id: int

    class Config:
        orm_mode = True
