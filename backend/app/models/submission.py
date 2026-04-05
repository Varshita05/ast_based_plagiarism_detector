from pydantic import BaseModel

class CodeSubmission(BaseModel):
    code: str