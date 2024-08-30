<div align="justify">

# <div align="center">Fermat’s little theorem</div>

Fermat’s little theorem states that if p is a prime number, then for any integer a, the number a p – a is an integer multiple of p. 

<table align="center">
  <tr>
    <td>
      Here p is a prime number<br>
      $$a^p ≡ a$$ (mod p).
    </td>
  </tr>
</table>

__Special Case__: If a is not divisible by p, Fermat’s little theorem is equivalent to the statement that $$a^{p-1}-1$$ is an integer multiple of p.

<table align="center">
  <tr>
    <td>
      $$a^{p-1} ≡ 1$$ (mod p)<br>
      OR<br> 
      $$a^{p-1}$$ % p = 1<br> 
      Here a is not divisible by p. 
    </td>
  </tr>
</table>

### Take an Example How Fermat’s little theorem works 

__Example 1__

```
P = an integer Prime number   
a = an integer which is not multiple of P  
Let a = 2 and P = 17 

According to Fermat's little theorem 
2^(17 - 1)     ≡ 1 mod(17)
we got  65536 % 17 ≡ 1   
that mean (65536-1) is an multiple of 17 
```

**Example 2**

```
Find the remainder when you divide 3^100,000 by 53.

Since, 53 is prime number we can apply fermat's little theorem here.
Therefore:     3^(53-1) ≡ 1 (mod 53)
               3^52 ≡ 1   (mod 53)
Trick: Raise both sides to a larger power so that it is close to 100,000.

100000/52 = Quotient = 1923 and remainder = 4.

Multiplying both sides with 1923:

(3^52)^1923 ≡ 1^1923 (mod 53)
3^99996 ≡ 1  (mod 53)

Multiplying both sides with 3^4:

3^100,000 ≡ 3^4  (mod 53)
3^100,000 ≡ 81   (mod 53)
3^100,000 ≡ 28   (mod 53).

Therefore, the remainder is 28 when you divide 3^100,000 by 53.
```

**Use of Fermat’s little theorem**

If we know m is prime, then we can also use Fermat’s little theorem to find the inverse.

$$a^{m-1} ≡ 1 (\mod m)$$

If we multiply both sides with $$a^{-1}$$, we get

$$a^{-1} ≡ a^{m-2} (\mod m)$$

Below is the Implementation of above:

```cpp
// C++ program to find modular inverse of a
// under modulo m using Fermat's little theorem.
// This program works only if m is prime.
#include <bits/stdc++.h>
using namespace std;
 
// To compute x raised to power y under modulo m
int power(int x, unsigned int y, unsigned int m);
 
// Function to find modular inverse of a under modulo m
// Assumption: m is prime
void modInverse(int a, int m)
{
    if (__gcd(a, m) != 1)
        cout << "Inverse doesn't exist";
 
    else {
 
        // If a and m are relatively prime, then
        // modulo inverse is a^(m-2) mode m
        cout << "Modular multiplicative inverse is "
             << power(a, m - 2, m);
    }
}
 
// To compute x^y under modulo m
int power(int x, unsigned int y, unsigned int m)
{
    if (y == 0)
        return 1;
    int p = power(x, y / 2, m) % m;
    p = (p * p) % m;
 
    return (y % 2 == 0) ? p : (x * p) % m;
}
 
// Driver Program
int main()
{
    int a = 3, m = 11;
    modInverse(a, m);
    return 0;
}
```

__Output__

```
Modular multiplicative inverse is 4
```

> **Time Complexity**: O(log m)
>
> **Auxiliary Space**: O(log m) because of the internal recursion stack.

## Applications of Fermat’s Theorem

1. **Compute nCr % p**
2. **Modular multiplicative inverse**
3. **Primality Test**
4. **Modulo $$10^9+7$$ (1000000007)**

</div>
