from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Load model once (very important)
model = SentenceTransformer("all-MiniLM-L6-v2")

def compare_text(missing_desc: str, sighting_desc: str):
    try:
        # Encode sentences into embeddings
        embeddings = model.encode([missing_desc, sighting_desc])

        # Compute cosine similarity
        similarity = cosine_similarity(
            [embeddings[0]], [embeddings[1]]
        )[0][0]

        similarity = float(similarity)

        # Define confidence levels
        if similarity > 0.80:
            level = "High"
        elif similarity > 0.60:
            level = "Medium"
        else:
            level = "Low"

        return {
            "text_similarity": round(similarity, 3),
            "level": level
        }

    except Exception as e:
        return {
            "text_similarity": 0,
            "level": "Low",
            "error": str(e)
        }