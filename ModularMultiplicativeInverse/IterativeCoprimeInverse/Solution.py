# Iterative Python 3 program to find
# modular inverse using extended
# Euclid algorithm

# Returns modulo inverse of a with
# respect to m using extended Euclid
# Algorithm Assumption: a and m are
# coprimes, i.e., gcd(A, M) = 1


def modInverse(A, M):
    m0 = M
    y = 0
    x = 1

    if (M == 1):
        return 0

    while (A > 1):

        # q is quotient
        q = A // M

        t = M

        # m is remainder now, process
        # same as Euclid's algo
        M = A % M
        A = t
        t = y

        # Update x and y
        y = x - q * y
        x = t

    # Make x positive
    if (x < 0):
        x = x + m0

    return x


# Driver code
if __name__ == "__main__":
    A = 3
    M = 11

    # Function call
    print("Modular multiplicative inverse is",
          modInverse(A, M))
