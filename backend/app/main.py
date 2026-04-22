from fastapi import FastAPI
from app.api import upload, analyze
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title = "AST Code Plagiarism Detector")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://ast-based-plagiarism-detector.vercel.app"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router, prefix="/upload")
app.include_router(analyze.router, prefix="/analyze")

@app.get("/")
@app.head("/")

def root():
    return {"status": "Backend Running"}



