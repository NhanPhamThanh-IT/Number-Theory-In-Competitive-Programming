# Binary exponentiation
def apply(S, P):
    temp = [0] * len(S)
    for i in range(1, len(S)):
        temp[i] = S[P[i]]
    for i in range(1, len(S)):
        S[i] = temp[i]

# Function to apply Permutation P to Sequence S K number of times
def solve(S, P, K):
    while K:
        if K & 1:
            apply(S, P)
        apply(P, P)
        K >>= 1

if __name__ == "__main__":
    P = [0, 2, 3, 4, 1]
    S = [0, 2, 1, 3, 4]
    K = 2
    solve(S, P, K)
    print("New Sequence =", end=" ")
    for i in range(1, len(S)):
        print(S[i], end=" ")
