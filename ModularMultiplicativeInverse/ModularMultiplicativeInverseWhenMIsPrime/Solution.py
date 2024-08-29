# Python3 program to find modular
# inverse of A under modulo M

# This program works only if M is prime.

# Function to find modular
# inverse of A under modulo M
# Assumption: M is prime


def modInverse(A, M):

    g = gcd(A, M)

    if (g != 1):
        print("Inverse doesn't exist")

    else:

        # If A and M are relatively prime,
        # then modulo inverse is A^(M-2) mod M
        print("Modular multiplicative inverse is ",
              power(A, M - 2, M))

# To compute x^y under modulo M


def power(x, y, M):

    if (y == 0):
        return 1

    p = power(x, y // 2, M) % M
    p = (p * p) % M

    if(y % 2 == 0):
        return p
    else:
        return ((x * p) % M)

# Function to return gcd of a and b


def gcd(a, b):
    if (a == 0):
        return b

    return gcd(b % a, a)


# Driver Code
if __name__ == "__main__":
    A = 3
    M = 11

    # Function call
    modInverse(A, M)
