from deepface import DeepFace
import tempfile
import os

def compare_faces(file1, file2):
    try:
        # Save uploaded files temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp1:
            temp1.write(file1)
            temp_path1 = temp1.name

        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp2:
            temp2.write(file2)
            temp_path2 = temp2.name

        # Compare faces
        result = DeepFace.verify(
            img1_path=temp_path1,
            img2_path=temp_path2,
            model_name="Facenet",
            enforce_detection=True
        )

        distance = result["distance"]
        verified = result["verified"]

        # Convert distance to similarity score (0 to 1)
        similarity = 1 - distance

        # Cleanup
        os.remove(temp_path1)
        os.remove(temp_path2)

        return {
            "verified": verified,
            "similarity": round(float(similarity), 3)
        }

    except Exception as e:
        return {
            "verified": False,
            "similarity": 0,
            "error": str(e)
        }