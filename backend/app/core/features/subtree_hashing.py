import ast
from collections import Counter

class FeatureVectorExtractor:
    """
    Extracts structural features from AST.
    """

    def __init__(self):
        self.features = Counter()

    def extract(self, tree: ast.AST):
        """
        Generate a feature vector from AST.
        """
        for node in ast.walk(tree):
            node_type = type(node).__name__

            # count node types
            self.features[node_type] += 1

            # detect loops
            if isinstance(node, (ast.For, ast.While)):
                self.features["loops"] += 1

            # detect conditionals
            if isinstance(node, ast.If):
                self.features["conditionals"] += 1

            # detect function definitions
            if isinstance(node, ast.FunctionDef):
                self.features["functions"] += 1

            # detect function calls
            if isinstance(node, ast.Call):
                self.features["calls"] += 1

        return dict(self.features)


def vector_similarity(vec1, vec2):
    """
    Cosine similarity between feature vectors.
    """
    import math

    all_keys = set(vec1.keys()) | set(vec2.keys())

    dot = sum(vec1.get(k, 0) * vec2.get(k, 0) for k in all_keys)
    mag1 = math.sqrt(sum(v*v for v in vec1.values()))
    mag2 = math.sqrt(sum(v*v for v in vec2.values()))

    if mag1 == 0 or mag2 == 0:
        return 0

    return dot / (mag1 * mag2)