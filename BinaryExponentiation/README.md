<div align="justify">

# <div align="center">Binary Exponentiation for Competitive Programming</div>

In competitive programming, we often need to do a lot of big number calculations fast. Binary exponentiation is like a super shortcut for doing powers and can make programs faster. This article will show you how to use this powerful trick to enhance your coding skills.

<div align="center">
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240514122931/Binary-Exponentiation-for-Competitive-Programming.webp">
</div>

## What is Binary Exponentiation?

> __Binary Exponentiation__ or __Exponentiation by squaring__ is the process of calculating a number raised to the power another number (A^B) in __Logarithmic__ time of the exponent or power, which speeds up the execution time of the program.

## Why to use Binary Exponentiation?

> Whenever we need to calculate (AB), we can simple calculate the result by taking the __result__ as 1 and multiplying __A__ for exactly __B__ times. The time complexity for this approach is O(B) and will fail when values of B in order of __10^8__ or greater. This is when we can use Binary exponentiation because it can calculate the result in O(log(B)) time complexity, so we can easily calculate the results for larger values of B in order of __10^18__ or less.

## Idea Behind Binary Exponentiation

When we are calculating (A^B), we can have 3 possible positive values of B:

- __Case 1__: If B = 0, whatever be the value of A, our result will be 1.
- __Case 2__: If B is an even number, then instead of calculating (A^B), we can calculate (A^2)^(B/2)) and the result will be same.
- __Case 3__: If B is an odd number, then instead of calculating (A^B), we can calculate (A*(A^((B – 1)/2))^2).

__Examples__

```
2^12 = (2)^(2*6)
= (4)^6
= (4)^(2 * 3)
= (16)^3
= 16*(16)^2
= 16*(256)^1
```

## Recursive implementation of Binary Exponentiation

```cpp
#include <bits/stdc++.h>
using namespace std;

long long power(long long A, long long B)
{
    if (B == 0)
        return 1;

    long long res = power(A, B / 2);

    if (B % 2)
        return res * res * A;
    else
        return res * res;
}

int main()
{
    cout << power(2, 12) << "\n";
    return 0;
}
```

__Output__

```
4096
```

## Iterative Implementation of Binary Exponentiation

```cpp
#include <bits/stdc++.h>
using namespace std;

long long power(long long a, long long b) {
    long long result = 1;
    while(b) {
        if (b & 1) 
        result = result * a;
        a = a * a;
        b >>= 1;
    }
    return result;
}

int main() {
    cout<<power(2, 12)<<"\n";
    return 0;
}
```

__Output__

```
4096
```

## Use Cases of Binary Exponentiation in Competitive Programming

### 1. Fast Computation of Nth Fibonacci Number

We can compute Nth Fibonacci Number by simply running a loop till N and in every iteration i, we calculate the ith Fibonacci number using (i-1)th and (i-2)th iteration. But this approach runs in linear time complexity, that is O(N). But, if we are concerned with simply the Nth Fibonacci number and not every number before it, then we can compute it in O(logN) by using matrix exponentiation, where we build a 2⨯2 matrix to transition from (i-2)th and (i-1)th Fibonacci number to (i-1)th and ith Fibonacci number.

### 2. Compute a large number modulo M

It is hardly to see any problem which is all about to compute __A^B__, but Binary Exponentiation comes in handy when our answer becomes too large to be stored as an integer, that is greater than __INT_MAX__. There are many problems which asks us to count the number of ways to do something and as the number of ways are too large to be stored in an Integer variable, the question asks us to print the answer modulo __1000000007__ or modulo __998244353__.

```
(A * B) mod M = ((A mod M) * (B mod M)) mod M
```

Therefore, Binary Exponentiation is very useful in computing AB mod M.

```cpp
#include <bits/stdc++.h>;
using namespace std;

const int mod = 1e9 + 7;

long long power(long long a, long long b)
{
    long long result = 1;
    while (b) {
        if (b & 1)
            result = (result * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return result;
}

int main()
{
    cout << power(2, 42) << "\n";
    return 0;
}
```

__Output__

```
46480318
```

### 3. Apply Permutation of a given Sequence large number of times

Let’s suppose, we are given a Permutation __P__ and a Sequence __S__ and we need to apply __P__ to __S__ for a large number of times (say __K__), then we can easily compute the final sequence by using Binary Exponentiation.

__Examples__

```
P = [2, 3, 4, 1], S = [2, 1, 3, 4]
After applying permutation P to Sequence S once,
S’ = [1, 3, 4, 2]
Explanation:
S'[1] = S[P[1]] = S[2] = 1
S'[2] = S[P[2]] = S[3] = 3
S'[3] = S[P[3]] = S[4] = 4
S'[4] = S[P[4]] = S[1] = 2

After applying permutation P to Sequence S twice,
S” = [3, 4, 2, 1]
Explanation:
S”[1] = S'[P[1]] = S'[2] = S[P[2]] = S[3] = 3
S”[2] = S'[P[2]] = S'[3] = S[P[3]] = S[4] = 4
S”[3] = S'[P[3]] = S'[4] = S[P[4]] = S[1] = 2
S”[4] = S'[P[4]] = S'[1] = S[P[1]] = S[2] = 1
```

__Observations__: If we observe carefully, in the above example instead of applying permutation __P__ to __S__ twice, if we apply permutation __P__ in itself (__P’__) and then apply it on __S__ once, we will get the same result.

```
P = [2, 3, 4, 1], S = [2, 1, 3, 4]
After applying permutation P to itself once,
P’ = [3, 4, 1, 2]
Explanation:
P'[1] = P[P[1]] = P[2] = 3
P'[2] = P[P[2]] = P[3] = 4
P'[3] = P[P[3]] = P[4] = 1
P'[4] = P[P[4]] = P[1] = 2

Now, applying permutation P’ to S,
S”[1] = S[P'[1]] = S[3] = 3
S”[2] = S[P'[2]] = S[4] = 4
S”[3] = S[P'[3]] = S[1] = 2
S”[4] = S[P'[4]] = S[2] = 1
```

Therefore, it is clear that applying a permutation __P__ to a sequence __S__ for __N__ times is equal to applying permutation __P’__ to sequence __S__ for __N/2__ times and we can simply solve this using Binary Exponentiation:

```cpp
#include <bits/stdc++.h>
using namespace std;

// binary exponentiation
void apply(vector<int>& S, vector<int>& P)
{
    vector<int> temp(S.size());
    for (int i = 1; i < S.size(); i++) {
        temp[i] = S[P[i]];
    }
    for (int i = 1; i < S.size(); i++)
        S[i] = temp[i];
}

// Function to apply Permutation P to Sequence S
// K number of times
void solve(vector<int>& S, vector<int>& P, int K)
{
    while (K) {
        if (K & 1)
            apply(S, P);
        apply(P, P);
        K >>= 1;
    }
}
int main()
{
    vector<int> P{ 0, 2, 3, 4, 1 };
    vector<int> S{ 0, 2, 1, 3, 4 };
    int K = 2;
    solve(S, P, K);
    cout << "New Sequence = ";
    for (int i = 1; i < S.size(); i++)
        cout << S[i] << " ";
    return 0;
}
```

__Output__

```
New Sequence = 3 4 2 1 
```

__Complexity Analysis__

- __Brute Force__: O(N * K)
- __Binary Exponentiation__: O(N * logK)

### 4. Compute Product of 2 very Large Numbers Modulo M

If we have 2 very large number __A__ and __B__ and we need no compute __(A * B)__ mod __M__ but __(A * B)__ in 64-bit integer, then we can use the concept of binary exponentiation to compute the product of these 2 numbers by adding __A__ to the answer __B__ times.

When we are calculating __(A * B)__, we can have 3 possible positive values of __B__:

- __Case 1__: If __B = 0__, whatever be the value of A, our result will be __0__.
- __Case 2__: If __B__ is an even number, then instead of calculating __(A * B)__ mod __M__ , we can calculate __(((A * 2) mod M) * B/2)__ mod __M__ and the result will be same.
- __Case 3__: If __B__ is an odd number, then instead of calculating __(A * B)__, we can calculate __(A + A * (B-1))__ mod __M__, which is same as case 2.

We can recursively follow the above steps to get our result.

__Examples__

```
(25 * 10) mod 60 = ((25 * 2) mod 60 * 5) mod 60
= ((50 mod 60) * 5) mod 60
= (50 + (50 mod 60) * 4) mod 60
= (50 + (100 mod 60) * 2) mod 60
= (50 + (40 mod 60) * 2) mod 60
= (50 + (80 mod 60)) mod 60
= (50 + 20) mod 60
= 10
```

Therefore, we can compute (A * B) mod M using Binary Exponentiation:

```cpp
#include <bits/stdc++.h>
using namespace std;

const int mod = 1e9 + 7;

// function to multiply to very large numbers
int multiply(int A, int B) {
    int ans = 0;
    while(B) {
        if(B & 1) {
            ans = (ans + A) % mod;
        }
        A = (A + A) % mod;
        B >>= 1;
    }
    return ans;
}

int main() {

    int A = 1e9, B = 1e9;
    cout << multiply(A, B);
    return 0;
}
```

__Output__

```
49
```

__Complexity Analysis__

- __Brute Force__: O(1), but not possible for large numbers.
- __Binary Exponentiation__: O(log B), as we have distributed the multiplication operation to a series of log(B) addition operations.

</div>
