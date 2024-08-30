<div align="justify">

# <div align="center">Prime Factorization using Sieve O(log n) for multiple queries</div>

We can calculate the prime factorization of a number **“n”** in **O(sqrt(n))** as discussed here. But O(sqrt n) method times out when we need to answer multiple queries regarding prime factorization.

In this article, we study an efficient method to calculate the prime factorization using O(n) space and **O(log n)** time complexity with pre-computation allowed.

**Approach**

> The main idea is to precompute the Smallest Prime Factor (SPF) for each number from 1 to MAXN using the sieve function. SPF is the smallest prime number that divides a given number without leaving a remainder. Then, the getFactorization function uses the precomputed SPF array to find the prime factorization of the given number by repeatedly dividing the number by its SPF until it becomes 1.
> 
> To calculate to smallest prime factor for every number we will use the sieve of eratosthenes. In the original Sieve, every time we mark a number as not prime, we store the corresponding smallest prime factor for that number (Refer this article for better understanding).

Now, after we are done with precalculating the smallest prime factor for every number we will divide our number n (whose prime factorization is to be calculated) by its corresponding smallest prime factor till n becomes 1. 

```
Pseudo Code for prime factorization assuming
SPFs are computed :

PrimeFactors[] // To store result

i = 0  // Index in PrimeFactors

while n != 1 :

    // SPF : smallest prime factor
    PrimeFactors[i] = SPF[n]    
    i++ 
    n = n / SPF[n]
```

Step-by-step approach of above idea:

- Defines a constant **MAXN** equal to **100001**.
- An integer array spf of size **MAXN** is declared. This array will store the smallest prime factor for each number up to **MAXN**.
- A function **sieve()** is defined to calculate the smallest prime factor of every number up to **MAXN** using the Sieve of Eratosthenes algorithm.
- The smallest prime factor for the all the number **is initially** set to **1**.
- If a number **i** is prime, then the smallest prime factor for all numbers divisible by **i** and if their smallest prime factor hasnt been found yet is then set to **i**.
- A function **getFactorization(int x)** is defined to return the prime factorization of a given integer **x** using the spf array.
- The **getFactorization(int x)** function finds the smallest prime factor of **x**, pushes it to a vector, and updates **x** to be the quotient of **x** divided by its smallest prime factor. This process continues until **x** becomes **1**, at which point the vector of prime factors is returned.
- In the main() function, the **sieve()** function is called to precalculate the smallest prime factor of every number up to **MAXN**. Then, the prime factorization of a sample integer x is found using the **getFactorization(int x)** function, and the **result** is printed to the console.

The implementation for the above method is given below:

```cpp
// C++ program to find prime factorization of a
// number n in O(Log n) time with precomputation
// allowed.
#include "bits/stdc++.h"
using namespace std;

#define MAXN 100001
vector<int> spf(MAXN + 1, 1);

// Calculating SPF (Smallest Prime Factor) for every
// number till MAXN.
// Time Complexity : O(nloglogn)
void sieve()
{
    // stores smallest prime factor for every number

    spf[0] = 0;
    for (int i = 2; i <= MAXN; i++) {
        if (spf[i] == 1) { // if the number is prime ,mark
                           // all its multiples who havent
                           // gotten their spf yet
            for (int j = i; j <= MAXN; j += i) {
                if (spf[j]== 1) // if its smallest prime factor is
                          // 1 means its spf hasnt been
                          // found yet so change it to i
                    spf[j] = i;
            }
        }
    }
}

// A O(log n) function returning primefactorization
// by dividing by smallest prime factor at every step
vector<int> getFactorization(int x)
{
    vector<int> ret;
    while (x != 1) {
        ret.push_back(spf[x]);
        x = x / spf[x];
    }
    return ret;
}

// driver program for above function
int main(int argc, char const* argv[])
{
    // precalculating Smallest Prime Factor
    sieve();
    int x = 12246;
    cout << "prime factorization for " << x << " : ";

    // calling getFactorization function
    vector<int> p = getFactorization(x);

    for (int i = 0; i < p.size(); i++)
        cout << p[i] << " ";
    cout << endl;
    return 0;
}
```

__Output__

```
prime factorization for 12246 : 2 3 13 157
```

__Time Complexity__: O(log n), for each query (Time complexity for precomputation is not included)

__Auxiliary Space__: O(1)

__Note__: The above code works well for n upto the order of $$10^7$$. Beyond this we will face memory issues.

__Time Complexity__: The precomputation for smallest prime factor is done in O(n log log n) using sieve. Whereas in the calculation step we are dividing the number every time by the smallest prime number till it becomes 1. So, let’s consider a worst case in which every time the SPF is 2 . Therefore will have log n division steps. Hence, We can say that our Time Complexity will be **O(log n)** in worst case.

</div>
