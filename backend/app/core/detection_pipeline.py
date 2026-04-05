from app.core.parser.python_parser import parse_code_to_ast
from app.core.normalizer.normalize_ast import normalize_ast

from app.core.features.node_sequence import NodeSequenceExtractor
from app.core.features.ast_paths import extract_paths
from app.core.features.subtree_patterns import extract_subtrees

from app.core.similarity.jaccard import jaccard_similarity
from app.core.similarity.cosine import cosine_similarity
from app.core.similarity.lcs import lcs_similarity


def detect_similarity(code1: str, code2: str):
    tree1 = parse_code_to_ast(code1)
    tree2 = parse_code_to_ast(code2)

    if not tree1 or not tree2:
        return {
            "score": 0.0,
            "details": "Invalid code"
        }

    # Normalize
    tree1 = normalize_ast(tree1)
    tree2 = normalize_ast(tree2)

    # Feature Extraction
    seq1 = NodeSequenceExtractor().extract(tree1)
    seq2 = NodeSequenceExtractor().extract(tree2)

    paths1 = extract_paths(tree1)
    paths2 = extract_paths(tree2)

    sub1 = extract_subtrees(tree1)
    sub2 = extract_subtrees(tree2)

    # Similarities
    jacc = jaccard_similarity(seq1, seq2)
    cos = cosine_similarity(seq1, seq2)
    lcs = lcs_similarity(seq1, seq2)
    path_sim = jaccard_similarity(paths1, paths2)
    subtree_sim = cosine_similarity(sub1, sub2)

    # Weighted Score
    final_score = (
        0.25 * jacc +
        0.20 * cos +
        0.20 * lcs +
        0.20 * path_sim +
        0.15 * subtree_sim
    )

    return {
        "final_score": round(final_score, 4),
        "breakdown": {
            "jaccard": jacc,
            "cosine": cos,
            "lcs": lcs,
            "path_similarity": path_sim,
            "subtree_similarity": subtree_sim
        },
        "is_plagiarized": final_score > 0.5
    }