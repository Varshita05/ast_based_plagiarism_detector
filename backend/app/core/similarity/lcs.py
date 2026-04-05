def lcs_similarity(seq1, seq2):
    dp = [[0]*(len(seq2)+1) for _ in range(len(seq1)+1)]

    for i in range(1, len(seq1)+1):
        for j in range(1, len(seq2)+1):
            if seq1[i-1] == seq2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    lcs_len = dp[-1][-1]
    return lcs_len / max(len(seq1), len(seq2), 1)