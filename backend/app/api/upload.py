from fastapi import APIRouter, UploadFile, File
import os
import uuid

router = APIRouter()

UPLOAD_DIR = "data/raw_submissions"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/")

async def upload_code(file: UploadFile = File(...)):
    file_id = str(uuid.uuid4())
    file_path = os.path.join(UPLOAD_DIR, f"{file.id}.py")

    with open(file_path, "wb") as f:
        f.write(await file.read())

    return {
        "file_id": file_id,
        "filename": file.filename
    }
