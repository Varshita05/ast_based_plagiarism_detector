from fastapi import FastAPI
from app.api import upload, analyze
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title = "AST Code Plagiarism Detector")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router, prefix="/upload")
app.include_router(analyze.router, prefix="/analyze")

@app.get("/")

def root():
    return {"status": "Backend Running"}



