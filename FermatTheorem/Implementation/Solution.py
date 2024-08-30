# Python program to find
# modular inverse of a
# under modulo m using
# Fermat's little theorem.
# This program works
# only if m is prime.
 
 
def __gcd(a, b):
 
    if(b == 0):
        return a
    else:
        return __gcd(b, a % b)
 
# To compute x^y under modulo m
 
 
def power(x, y, m):
 
    if (y == 0):
        return 1
    p = power(x, y // 2, m) % m
    p = (p * p) % m
 
    return p if(y % 2 == 0) else (x * p) % m
 
# Function to find modular
# inverse of a under modulo m
# Assumption: m is prime
 
 
def modInverse(a, m):
 
    if (__gcd(a, m) != 1):
        print("Inverse doesn't exist")
 
    else:
 
        # If a and m are relatively prime, then
        # modulo inverse is a^(m-2) mode m
        print("Modular multiplicative inverse is ",
              power(a, m - 2, m))
 
# Driver code
 
 
a = 3
m = 11
modInverse(a, m)
