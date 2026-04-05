from unittest import result

from fastapi import APIRouter, UploadFile, File
from app.core.detection_pipeline import detect_similarity

router = APIRouter()

@router.post("/")

async def analyze_code(file1: UploadFile = File(...), file2: UploadFile = File(...)):
    code1 = (await file1.read()).decode("utf-8")
    code2 = (await file2.read()).decode("utf-8")

    result = detect_similarity(code1, code2)

    return {
        "similarity_score": round(result["final_score"], 2),
        "details": result["breakdown"],
        "verdict": "Plagiarized" if result["is_plagiarized"] else "Original"
    }
