from pydantic import BaseModel

class SimilarityResult(BaseModel):
    similarity_score: float
    is_plagiarized: bool