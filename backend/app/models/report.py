from pydantic import BaseModel
from typing import List

class Report(BaseModel):
    results: List[dict]