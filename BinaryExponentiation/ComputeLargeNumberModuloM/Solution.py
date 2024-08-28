# Python Implementation
mod = 10**9 + 7

def power(a, b):
    result = 1
    while b:
        if b & 1:
            result = (result * a) % mod
        a = (a * a) % mod
        b >>= 1
    return result

print(power(2, 42))
