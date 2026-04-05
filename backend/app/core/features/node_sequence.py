import ast

class NodeSequenceExtractor:
    """
    Extract ordered AST node sequences.
    """

    def __init__(self):
        self.sequence = []

    def visit(self, node):
        self.sequence.append(type(node).__name__)

        for child in ast.iter_child_nodes(node):
            self.visit(child)

    def extract(self, tree):
        self.sequence = []
        self.visit(tree)
        return self.sequence


def sequence_similarity(seq1, seq2):
    """
    Longest Common Subsequence similarity.
    """

    m = len(seq1)
    n = len(seq2)

    dp = [[0]*(n+1) for _ in range(m+1)]

    for i in range(m):
        for j in range(n):
            if seq1[i] == seq2[j]:
                dp[i+1][j+1] = dp[i][j] + 1
            else:
                dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])

    lcs = dp[m][n]

    return lcs / max(m, n)