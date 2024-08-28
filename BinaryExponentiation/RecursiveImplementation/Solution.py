def power(A, B):
    if B == 0:
        return 1

    res = power(A, B // 2)

    if B % 2:
        return res * res * A
    else:
        return res * res

if __name__ == "__main__":
    print(power(2, 12))
