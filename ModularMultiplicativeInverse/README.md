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

The idea is to use __Extended Euclidean__ algorithms that take two integers ‘a’ and ‘b’, then find their gcd, and also find ‘x’ and ‘y’ such that 

$$ax + by = gcd(a,b)$$

To find the multiplicative inverse of ‘A’ under ‘M’, we put b = M in the above formula. Since we know that A and M are relatively prime, we can put the value of gcd as 1.

Ax + My = 1

If we take modulo M on both sides, we get

Ax + My ≡ 1 (mod M)

We can remove the second term on left side as ‘My (mod M)’ would always be 0 for an integer y. 

Ax  ≡ 1 (mod M)

So the ‘x’ that we can find using Extended Euclid Algorithm is the multiplicative inverse of ‘A’

</div>
