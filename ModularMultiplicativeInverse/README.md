<div align="justify">

# <div align="center">Modular Multiplicative Inverse</div>

Given two integers __A__ and __M__, find the modular multiplicative inverse of __A__ under modulo __M__.

The modular multiplicative inverse is an integer X such that:

<table align="center" style="border: none; border-collapse: collapse;">
  <tr>
    <td>
      $$AX ≡ 1$$ (mod M)  
    </td>
  </tr>
</table>

> __NOTE__: The value of __X__ should be in the range {1, 2, … M-1}, i.e., in the range of integer modulo __M__. ( Note that __X__ cannot be 0 as A*0 mod M will never be 1). The multiplicative inverse of “A modulo M” exists if and only if A and M are relatively prime (i.e. if gcd(A, M) = 1).

__Examples__

```
Input: A = 3, M = 11
Output: 4
Explanation: Since (4*3) mod 11 = 1, 4 is modulo inverse of 3(under 11).
One might think, 15 also as a valid output as “(15*3) mod 11” 
is also 1, but 15 is not in range {1, 2, … 10}, so not valid.

Input:  A = 10, M = 17
Output: 12
Explamation: Since (10*12) mod 17 = 1, 12 is modulo inverse of 10(under 17).
```

__Naive Approach__:  To solve the problem, follow the below idea:

> A naive method is to try all numbers from 1 to m. For every number x, check if (A * X) % M is 1

__Time Complexity__: O(M)

__Auxiliary Space__: O(1)

## Modular multiplicative inverse when M and A are coprime or gcd(A,M) = 1

The idea is to use __Extended Euclidean__ algorithms that take two integers ‘a’ and ‘b’, then find their __gcd__, and also find __‘x’__ and __‘y’__ such that 

$$ax + by = gcd(a,b)$$

To find the multiplicative inverse of ‘A’ under ‘M’, we put b = M in the above formula. Since we know that A and M are relatively prime, we can put the value of gcd as 1.

$$Ax + My = 1$$

If we take modulo M on both sides, we get

<table align="center" style="border: none; border-collapse: collapse;">
  <tr>
    <td>
      $$Ax + My ≡ 1$$ (mod M)
    </td>
  </tr>
</table>

We can remove the second term on left side as ‘My (mod M)’ would always be 0 for an integer y. 

<table align="center" style="border: none; border-collapse: collapse;">
  <tr>
    <td>
      $$Ax  ≡ 1$$ (mod M)
    </td>
  </tr>
</table>

So the ‘x’ that we can find using Extended Euclid Algorithm is the multiplicative inverse of ‘A’

Below is the implementation of the above approach:

```cpp
// C++ program to find multiplicative modulo
// inverse using Extended Euclid algorithm.
#include <bits/stdc++.h>
using namespace std;

// Function for extended Euclidean Algorithm
int gcdExtended(int a, int b, int* x, int* y);

// Function to find modulo inverse of a
void modInverse(int A, int M)
{
    int x, y;
    int g = gcdExtended(A, M, &x, &y);
    if (g != 1)
        cout << "Inverse doesn't exist";
    else {

        // m is added to handle negative x
        int res = (x % M + M) % M;
        cout << "Modular multiplicative inverse is " << res;
    }
}

// Function for extended Euclidean Algorithm
int gcdExtended(int a, int b, int* x, int* y)
{

    // Base Case
    if (a == 0) {
        *x = 0, *y = 1;
        return b;
    }

    // To store results of recursive call
    int x1, y1;
    int gcd = gcdExtended(b % a, a, &x1, &y1);

    // Update x and y using results of recursive
    // call
    *x = y1 - (b / a) * x1;
    *y = x1;

    return gcd;
}

// Driver Code
int main()
{
    int A = 3, M = 11;

    // Function call
    modInverse(A, M);
    return 0;
}
```

__Output__

```
Modular multiplicative inverse is 4
```

__Time Complexity__: O(log M)

__Auxiliary Space__: O(log M), because of the internal recursion stack.

### Iterative Implementation of the above approach

```cpp
// Iterative C++ program to find modular
// inverse using extended Euclid algorithm

#include <bits/stdc++.h>
using namespace std;

// Returns modulo inverse of a with respect
// to m using extended Euclid Algorithm
// Assumption: a and m are coprimes, i.e.,
// gcd(A, M) = 1
int modInverse(int A, int M)
{
    int m0 = M;
    int y = 0, x = 1;

    if (M == 1)
        return 0;

    while (A > 1) {
        // q is quotient
        int q = A / M;
        int t = M;

        // m is remainder now, process same as
        // Euclid's algo
        M = A % M, A = t;
        t = y;

        // Update y and x
        y = x - q * y;
        x = t;
    }

    // Make x positive
    if (x < 0)
        x += m0;

    return x;
}

// Driver Code
int main()
{
    int A = 3, M = 11;

    // Function call
    cout << "Modular multiplicative inverse is "
         << modInverse(A, M);
    return 0;
}
```

__Output__

```
Modular multiplicative inverse is 4
```

__Time Complexity__: O(log m)

__Auxiliary Space__: O(1)

## Modular multiplicative inverse when M is prime

If we know M is prime, then we can also use __Fermat’s little theorem__ to find the inverse. 

<table align="center" style="border: none; border-collapse: collapse;">
  <tr>
    <td>
      $$a^{M-1} ≡ 1$$ (mod M)
    </td>
  </tr>
</table>

If we multiply both sides with $$a^{-1}$$, we get 

<table align="center" style="border: none; border-collapse: collapse;">
  <tr>
    <td>
      $$a^{-1} ≡ a^{M-2}$$ (mod M)
    </td>
  </tr>
</table>

Below is the implementation of the above approach:

```cpp
// C++ program to find modular inverse of A under modulo M
// This program works only if M is prime.
#include <bits/stdc++.h>
using namespace std;

// To find GCD of a and b
int gcd(int a, int b);

// To compute x raised to power y under modulo M
int power(int x, unsigned int y, unsigned int M);

// Function to find modular inverse of a under modulo M
// Assumption: M is prime
void modInverse(int A, int M)
{
    int g = gcd(A, M);
    if (g != 1)
        cout << "Inverse doesn't exist";
    else {
        // If a and m are relatively prime, then modulo
        // inverse is a^(m-2) mode m
        cout << "Modular multiplicative inverse is "
             << power(A, M - 2, M);
    }
}

// To compute x^y under modulo m
int power(int x, unsigned int y, unsigned int M)
{
    if (y == 0)
        return 1;

    int p = power(x, y / 2, M) % M;
    p = (p * p) % M;

    return (y % 2 == 0) ? p : (x * p) % M;
}

// Function to return gcd of a and b
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

// Driver code
int main()
{
    int A = 3, M = 11;

    // Function call
    modInverse(A, M);
    return 0;
}
```

__Output__

```
Modular multiplicative inverse is 4
```

__Time Complexity__: O(log M)

__Auxiliary Space__: O(log M), because of the internal recursion stack.

## Applications

Computation of the modular multiplicative inverse is an essential step in __RSA public-key encryption method__.

</div>
