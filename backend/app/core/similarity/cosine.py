from collections import Counter
import math

def cosine_similarity(seq1, seq2):
    c1, c2 = Counter(seq1), Counter(seq2)

    all_keys = set(c1) | set(c2)

    v1 = [c1[k] for k in all_keys]
    v2 = [c2[k] for k in all_keys]

    dot = sum(a*b for a,b in zip(v1,v2))
    mag1 = math.sqrt(sum(a*a for a in v1))
    mag2 = math.sqrt(sum(b*b for b in v2))

    if mag1 == 0 or mag2 == 0:
        return 0

    return dot / (mag1 * mag2)