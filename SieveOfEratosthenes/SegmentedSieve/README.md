<div align="justify">

# <div align="center">Segmented Sieve</div>

Given a number n, print all primes smaller than n. For example, if the given number is 10, output 2, 3, 5, 7.

A Naive approach is to run a loop from 0 to n-1 and check each number for primeness. A Better Approach is to use Simple Sieve of Eratosthenes.

```cpp
#include <iostream>
#include <vector>

void simpleSieve(int limit) {
    // Create a boolean array "mark[0..limit-1]" and
    // initialize all entries of it as true. A value
    // in mark[p] will finally be false if 'p' is Not
    // a prime, else true.
    std::vector<bool> mark(limit, true);

    // One by one traverse all numbers so that their
    // multiples can be marked as composite.
    for (int p = 2; p * p < limit; p++) {
        // If p is not changed, then it is a prime
        if (mark[p] == true) {
            // Update all multiples of p
            for (int i = p * p; i < limit; i += p)
                mark[i] = false;
        }
    }

    // Print all prime numbers and store them in prime
    for (int p = 2; p < limit; p++)
        if (mark[p] == true)
            std::cout << p << " ";
}

int main() {
    int limit = 100; 
    simpleSieve(limit);
    return 0;
}
```

### Problems with Simple Sieve

The Sieve of Eratosthenes looks good, but consider the situation when n is large, the Simple Sieve faces the following issues.

- An array of size ?(n) may not fit in memory
- The simple Sieve is not cached friendly even for slightly bigger n. The algorithm traverses the array without locality of reference

### Segmented Sieve

The idea of a segmented sieve is to divide the range [0..n-1] in different segments and compute primes in all segments one by one. This algorithm first uses Simple Sieve to find primes smaller than or equal to ?(n). Below are steps used in Segmented Sieve.

__Step 1__: Use Simple Sieve to find all primes up to the square root of ‘n’ and store these primes in an array “prime[]”. Store the found primes in an array ‘prime[]’.

__Step 2__: We need all primes in the range [0..n-1]. We divide this range into different segments such that the size of every segment is at-most ?n

__Step 3__: Do following for every segment [low..high]

- Create an array mark[high-low+1]. Here we need only O(x) space where x is a number of elements in a given range.
- Iterate through all primes found in step 1. For every prime, mark its multiples in the given range [low..high].

In Simple Sieve, we needed O(n) space which may not be feasible for large n. Here we need O(?n) space and we process smaller ranges at a time (locality of reference)

Below is the implementation of the above idea.

```cpp
// C++ program to print  all primes smaller than
// n using segmented sieve
#include <bits/stdc++.h>
using namespace std;

// This functions finds all primes smaller than 'limit'
// using simple sieve of eratosthenes. It also stores
// found primes in vector prime[]
void simpleSieve(int limit, vector<int> &prime)
{
    // Create a boolean array "mark[0..n-1]" and initialize
    // all entries of it as true. A value in mark[p] will
    // finally be false if 'p' is Not a prime, else true.
    vector<bool> mark(limit + 1, true);

    for (int p=2; p*p<limit; p++)
    {
        // If p is not changed, then it is a prime
        if (mark[p] == true)
        {
            // Update all multiples of p
            for (int i=p*p; i<limit; i+=p)
                mark[i] = false;
        }
    }

    // Print all prime numbers and store them in prime
    for (int p=2; p<limit; p++)
    {
        if (mark[p] == true)
        {
            prime.push_back(p);
            cout << p << " ";
        }
    }
}

// Prints all prime numbers smaller than 'n'
void segmentedSieve(int n)
{
    // Compute all primes smaller than or equal
    // to square root of n using simple sieve
    int limit = floor(sqrt(n))+1;
    vector<int> prime; 
    prime.reserve(limit);
    simpleSieve(limit, prime); 

    // Divide the range [0..n-1] in different segments
    // We have chosen segment size as sqrt(n).
    int low = limit;
    int high = 2*limit;

    // While all segments of range [0..n-1] are not processed,
    // process one segment at a time
    while (low < n)
    {
        if (high >= n) 
           high = n;
        
        // To mark primes in current range. A value in mark[i]
        // will finally be false if 'i-low' is Not a prime,
        // else true.
        bool mark[limit+1];
        memset(mark, true, sizeof(mark));

        // Use the found primes by simpleSieve() to find
        // primes in current range
        for (int i = 0; i < prime.size(); i++)
        {
            // Find the minimum number in [low..high] that is
            // a multiple of prime[i] (divisible by prime[i])
            // For example, if low is 31 and prime[i] is 3,
            // we start with 33.
            int loLim = floor(low/prime[i]) * prime[i];
            if (loLim < low)
                loLim += prime[i];

            /* Mark multiples of prime[i] in [low..high]:
                We are marking j - low for j, i.e. each number
                in range [low, high] is mapped to [0, high-low]
                so if range is [50, 100] marking 50 corresponds
                to marking 0, marking 51 corresponds to 1 and
                so on. In this way we need to allocate space only
                for range */
            for (int j=loLim; j<high; j+=prime[i])
                mark[j-low] = false;
        }

        // Numbers which are not marked as false are prime
        for (int i = low; i<high; i++)
            if (mark[i - low] == true)
                cout << i << " ";

        // Update low and high for next segment
        low = low + limit;
        high = high + limit;
    }
}

// Driver program to test above function
int main()
{
    int n = 100;
    cout << "Primes smaller than " << n << ":\n";
    segmentedSieve(n);
    return 0;
}
```

__Output__

```
Primes smaller than 100: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
```

__Time Complexity__: O(n * ln(sqrt(n)))

__Auxiliary Space__: O(sqrt(n))

Note that time complexity (or a number of operations) by Segmented Sieve is the same as Simple Sieve. It has advantages for large ‘n’ as it has better locality of reference thus allowing better caching by the CPU and also requires less memory space.

</div>
