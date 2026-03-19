from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models.classifier import TextClassifier
from models.embeddings import Embedder
from utils.preprocessing import clean_text

app = FastAPI(
    title="Yantra AI Service",
    description="Machine Learning and NLP Service for Yantra Engine",
    version="1.0.0"
)

# Initialize Models
classifier = TextClassifier()
embedder = Embedder()

class PredictRequest(BaseModel):
    text: str

class EmbedRequest(BaseModel):
    texts: List[str]

@app.get("/health")
async def health():
    return {"status": "ready", "module": "ai-ml-ds"}

@app.post("/predict")
async def predict(request: PredictRequest):
    cleaned_text = clean_text(request.text)
    prediction = classifier.predict(cleaned_text)
    return {"input": request.text, "prediction": prediction}

@app.post("/embed")
async def embed(request: EmbedRequest):
    embeddings = embedder.get_embeddings(request.texts)
    return {"count": len(request.texts), "embeddings": embeddings.tolist()}

@app.post("/classify")
async def classify_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    # Placeholder for image classification logic
    return {"filename": file.filename, "label": "demo_class", "confidence": 0.98}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
