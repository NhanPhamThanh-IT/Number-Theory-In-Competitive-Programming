def power(a, b):
    result = 1
    while b:
        if b & 1:
            result = result * a
        a = a * a
        b >>= 1
    return result

if __name__ == "__main__":
    print(power(2, 12))
