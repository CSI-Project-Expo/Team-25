from fastapi import FastAPI, File, UploadFile, Form
from app.face_service import compare_faces
from app.text_service import compare_text
from pydantic import BaseModel
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MissingLink AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "AI service running"}

@app.post("/ai/face-match")
async def face_match(
    image1: UploadFile = File(...),
    image2: UploadFile = File(...)
):
    file1 = await image1.read()
    file2 = await image2.read()

    result = compare_faces(file1, file2)
    return result
class TextRequest(BaseModel):
    missing_description: str
    sighting_description: str
@app.post("/ai/text-match")
def text_match(request: TextRequest):
    result = compare_text(
        request.missing_description,
        request.sighting_description
    )
    return result
@app.post("/ai/match")
async def full_match(
    image1: UploadFile = File(...),
    image2: UploadFile = File(...),
    missing_description: str = Form(...),
    sighting_description: str = Form(...)
):
    # Read images
    file1 = await image1.read()
    file2 = await image2.read()

    # Face similarity
    face_result = compare_faces(file1, file2)
    face_score = face_result.get("similarity", 0)

    # Text similarity
    text_result = compare_text(
        missing_description,
        sighting_description
    )
    text_score = text_result.get("text_similarity", 0)

    # Weighted final score
    final_score = (0.6 * face_score) + (0.4 * text_score)

    # Confidence level
    if final_score >= 0.75:
        confidence = "High"
    elif final_score >= 0.55:
        confidence = "Medium"
    else:
        confidence = "Low"

    # Reason generation
    if confidence == "High":
        reason = (
            "Facial features show strong similarity and textual descriptions closely align. "
            "This sighting is very likely related to the registered missing case."
        )
    elif confidence == "Medium":
        reason = (
            "Facial similarity is moderate and textual details partially match. "
            "Admin verification is recommended before taking action."
        )
    else:
        reason = (
            "Facial similarity is low and descriptions do not closely match. "
            "This sighting is unlikely to be strongly related to the case."
        )

    return {
        "face_similarity": round(face_score, 3),
        "text_similarity": round(text_score, 3),
        "final_score": round(final_score, 3),
        "confidence": confidence,
        "reason": reason
    }