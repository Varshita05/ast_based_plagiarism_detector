def jaccard_similarity(seq1, seq2):
    set1, set2 = set(seq1), set(seq2)
    if not set1 or not set2:
        return 0.0
    return len(set1 & set2) / len(set1 | set2)