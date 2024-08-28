# Function to multiply two very large numbers
def multiply(A, B, mod):
    ans = 0
    while B:
        if B & 1:
            ans = (ans + A) % mod
        A = (A + A) % mod
        B >>= 1
    return ans

# Main function
if __name__ == "__main__":
    mod = 10**9 + 7
    A = int(1e9)
    B = int(1e9)
    print(multiply(A, B, mod))
