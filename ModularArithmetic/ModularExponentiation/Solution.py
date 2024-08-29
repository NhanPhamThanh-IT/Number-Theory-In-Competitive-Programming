#function that calculate modular exponentiation x^n mod m.
def modpower(x, n, m):
    if n == 0: # base case
        return 1 % m
    u = modpower(x, n // 2, m)
    u = (u * u) % m
    if n % 2 == 1: # when 'n' is odd
        u = (u * x) % m
    return u

#driver function
print(modpower(5, 2, 7))
