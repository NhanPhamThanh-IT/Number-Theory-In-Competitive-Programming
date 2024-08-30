# Python3 program to find prime factorization
# of a number n in O(Log n) time with
# precomputation allowed.
import math as mt

MAXN = 100001

# stores smallest prime factor for
# every number = 1
spf = [1] * (MAXN + 1)
# Calculating SPF (Smallest Prime Factor)
# for every number till MAXN.
# Time Complexity : O(nloglogn)


def sieve():
    spf[0] = 0
    for i in range(2, MAXN + 1):
        if spf[i] == 1:  # if the number is prime, mark
                         # all its multiples who havent
                         # gotten their spf yet
            for j in range(i, MAXN + 1, i):
                if spf[j] == 1:  # if its smallest prime factor is
                                 # 1 means its spf hasnt been
                                 # found yet so change it to i
                    spf[j] = i

# A O(log n) function returning prime
# factorization by dividing by smallest
# prime factor at every step


def getFactorization(x):
    ret = list()
    while (x != 1):
        ret.append(spf[x])
        x = x // spf[x]

    return ret

# Driver code


# precalculating Smallest Prime Factor
sieve()
x = 12246
print("prime factorization for", x, ": ",
      end="")

# calling getFactorization function
p = getFactorization(x)

for i in range(len(p)):
    print(p[i], end=" ")
