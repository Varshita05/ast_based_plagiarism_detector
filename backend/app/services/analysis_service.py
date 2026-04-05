from app.core.detection_pipeline import detect_similarity
from services.storage_services import get_all_codes

def analyze_code(new_code: str):
    previous_codes = get_all_codes()

    results = []

    for code in previous_codes:
        result = detect_similarity(new_code, code)
        results.append(result)

    return results