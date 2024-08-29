<div align="justify">

# <div align="center">Modular Arithmetic</div>

__Modular arithmetic__ is the branch of arithmetic mathematics related to the “mod” functionality. Basically, modular arithmetic is related to the computation of a “mod” of expressions. Expressions may have digits and computational symbols of addition, subtraction, multiplication, division or any other.

Modular arithmetic, often referred to as “clock arithmetic,” is a system of arithmetic for integers, where numbers wrap around upon reaching a certain value, known as the modulus. This concept is widely used in various fields, including cryptography, computer science, and engineering.

## What is Modular Arithmetic?

In modular arithmetic, numbers are reduced within a certain range, defined by the modulus. For two integers a and b, and a positive integer n, we say that a is congruent to b modulo n if their difference is an integer multiple of n. This is denoted as:

$$
a ≡ b (mod n)
$$

## Quotient remainder theorem

It states that, for any pair of integers a and b (b is positive), there exist two unique integers q and r such that:

$$
a = b x q + r where 0 <= r < b
$$

__Example__: If a = 20, b = 6 then q = 3, r = 2 -> 20 = 6 x 3 + 2

## Modular Addition

The rule for modular addition is:

$$
(a + b) \mod m = ((a \mod m) + (b \mod m)) \mod m
$$

__Example__

<table align="center">
  <tr>
    <td>
      $$(15 + 17) \mod 7$$<br>
      $$= ((15 \mod 7) + (17 \mod 7)) \mod 7$$<br>
      $$= (1 + 3) \mod 7$$<br>
      $$= 4 \mod 7$$<br>
      $$= 4$$
    </td>
  </tr>
</table>

The same rule is to modular subtraction. We don’t require much modular subtraction but it can also be done in the same way.

## Modular Multiplication

The Rule for modular multiplication is:

$$
(a x b) \mod m = ((a \mod m) x (b \mod m)) \mod m
$$

__Example__

<table align="center">
  <tr>
    <td>
      $$(12 x 13) \mod 5$$<br>
      $$= ((12 \mod 5) x (13 \mod 5)) \mod 5$$<br>
      $$= (2 x 3) \mod 5$$<br>
      $$= 6 \mod 5$$<br>
      $$= 1$$
    </td>
  </tr>
</table>

## Modular Division

The modular division is totally different from modular addition, subtraction and multiplication. It also does not exist always.

$$
(a / b) \mod m is not equal to ((a \mod m) / (b \mod m)) \mod m.
$$

This is calculated using the following formula:

$$
(a / b) \mod m = (a x (inverse of b if exists)) \mod m
$$

## Modular Inverse

The modular inverse of a mod m exists only if a and m are relatively prime i.e. gcd(a, m) = 1. Hence, for finding the inverse of a under modulo m, if (a x b) mod m = 1 then b is the modular inverse of a.

__Example__: a = 5, m = 7 -> (5 x 3) mod 7 = 1 hence, 3 is modulo inverse of 5 under 7.

## Modular Exponentiation

Finding $$a^b$$ mod m is the modular exponentiation. There are two approaches for this – recursive and iterative.

__Example__

<table align="center">
  <tr>
    <td>
      $$a = 5, b = 2, m = 7$$<br>
      $$(5^2) \mod 7 = 25 \mod 7 = 4$$
    </td>
  </tr>
</table>

There is often a need to efficiently calculate the value of $$x^n$$ mod m. This can be done in O(logn) time using the following recursion:

<div align="center">
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230409122215/Screenshot-2023-04-09-122034.png">
</div>

It is important that in the case of an even n, the value of $$x^{n/2}$$ is calculated only once.

This guarantees that the time complexity of the algorithm is O(logn) because n is always halved when it is even.

The following function calculates the value of $$x^n$$ mod m:

```cpp
int modpower(int x, int n, int m) 
{
   if (n == 0) 
       return 1%m;
   long long u = modpower(x,n/2,m);                                              
   u = (u*u)%m;
   if (n%2 == 1) 
       u = (u*x)%m;
   return u;
}
```

__Time complexity__: O(logn), because n is always halved when it is even.

Fermat’s theorem states that:
  
$$x^{m-1} \mod m = 1$$

When m is prime and x and m are coprime. This also yields:

<div align="center">

$$x^k$$ mod m = $$x^{k \mod (m-1)}$$ mod m

</div>

## Modular Arithmetic Solved Examples

### 1. Problem: Show that 38 ≡ 14 (mod 12)

__Solution__

<table align="center">
  <tr>
    <td>
      $$38 = 3 × 12 + 2$$<br>
      $$14 = 1 × 12 + 2$$<br>
      $$Both 38 and 14 have the same remainder (2) when divided by 12.$$<br>
      $$Therefore, 38 ≡ 14 (mod 12)$$
    </td>
  </tr>
</table>

### 2. Addition in Modular Arithmetic

__Problem__: Compute (27 + 19) mod 7

__Solution__

<table align="center">
  <tr>
    <td>
      $$27 ≡ 6 (\mod 7) because 27 = 3 × 7 + 6$$<br>
      $$19 ≡ 5 (\mod 7) because 19 = 2 × 7 + 5$$<br>
      $$(27 + 19) \mod 7 ≡ (6 + 5) \mod 7 ≡ 11 \mod 7 ≡ 4$$
    </td>
  </tr>
</table>

### 3. Multiplication in Modular Arithmetic

__Problem__: Compute (23 × 17) mod 5

__Solution__

<table align="center">
  <tr>
    <td>
      $$23 ≡ 3 (\mod 5) because 23 = 4 × 5 + 3$$<br>
      $$17 ≡ 2 (\mod 5) because 17 = 3 × 5 + 2$$<br>
      $$(23 × 17) \mod 5 ≡ (3 × 2) \mod 5 ≡ 6 \mod 5 ≡ 1$$
    </td>
  </tr>
</table>

### 4. Modular Exponentiation

__Problem__: Compute $$7^{100}$$ mod 11

__Solution__

<table align="center">
  <tr>
    <td>
      Use Euler’s theorem: $$a^{φ(n)} ≡ 1$$ (mod n) for coprime a and n<br>
      $$φ(11) = 10$$ (Euler’s totient function for prime 11)<br>
      $$7^{100} ≡ 7^{10 × 10} ≡ {7^10}^{10} ≡ 1^{10} ≡ 1$$ (mod 11)
    </td>
  </tr>
</table>

### 5. Linear Congruence

__Problem__: Solve 5x ≡ 3 (mod 7)

__Solution__

<table align="center">
  <tr>
    <td>
      Multiply both sides by 3 (modular multiplicative inverse of 5 mod 7)<br>
      $$3 × 5x ≡ 3 × 3$$ (mod 7)<br>
      $$15x ≡ 9$$ (mod 7)<br>
      $$x ≡ 2$$ (mod 7)
    </td>
  </tr>
</table>

### 6. Chinese Remainder Theorem

__Problem__: Solve the system of congruences $$x ≡ 2$$ (mod 3), $$x ≡ 3$$ (mod 5), $$x ≡ 2$$ (mod 7)

__Solution__

<table align="center">
  <tr>
    <td>
      $$M = 3 × 5 × 7 = 105$$<br>
      $$M1 = {105}/3 = 35, y1 = 35^{-1}$$ mod 3 = 2<br>
      $$M2 = {105}/5 = 21, y2 = 21^{-1}$$ mod 5 = 1<br>
      $$M3 = {105}/7 = 15, y3 = 15^{-1}$$ mod 7 = 1<br>
      $$x = (2 × 35 × 2 + 3 × 21 × 1 + 2 × 15 × 1)$$ mod 105<br>
      $$= (140 + 63 + 30)$$ mod 105<br>
      $$= 233$$ mod 105<br>
      $$= 23$$<br>
      <strong>Verify</strong>: $$23 ≡ 2$$ (mod 3), $$23 ≡ 3$$ (mod 5), $$23 ≡ 2$$ (mod 7)
    </td>
  </tr>
</table>

### 7. Modular Inverse

__Problem__: Find the modular inverse of 3 modulo 11

__Solution__

<table align="center">
  <tr>
    <td>
      <strong>Use extended Euclidean algorithm</strong><br>
      $$11 = 3 × 3 + 2$$<br>
      $$3 = 1 × 2 + 1$$<br>
      $$2 = 2 × 1 + 0$$<br>
      <strong>Working backwards</strong><br>
      $$1 = 3 – 1 × 2$$<br>
      $$1 = 3 – 1 × (11 – 3 × 3)$$<br>
      $$1 = 4 × 3 – 1 × 11$$<br>
      <strong>Therefore</strong>: $$3^{-1} ≡ 4$$ (mod 11)<br>
      <b>Verify</b>: $$(3 × 4)$$ mod 11 = 12 mod 11 = 1
    </td>
  </tr>
</table>

### 8. Fermat’s Little Theorem

__Problem__: Calculate $$7^{222}$$ mod 11

__Solution__

<table align="center">
  <tr>
    <td>
      Fermat’s Little Theorem states that if p is prime and a is not divisible by p, then:<br>
      $$a^{p-1} ≡ 1$$ (mod p)<br>
      Here, $$p = 11$$ (prime) and $$a = 7$$ (not divisible by 11)<br>
      So: $$7^{10} ≡ 1$$ (mod 11)<br>
      Now: $$222 = 22 × 10 + 2$$<br>
      Therefore: $$7^{222} ≡ {7^{10}}^{22} × 7^2$$ (mod 11)<br>
      $$≡ 1^{22} × 7^2$$ (mod 11)<br>
      $$≡ 49$$ (mod 11)<br>
      $$≡ 5$$ (mod 11)
    </td>
  </tr>
</table>

## Applications of Modular Arithmetic

### 1. Cryptography

Modular arithmetic is fundamental in cryptography, particularly in public-key cryptosystems like RSA, which relies on the difficulty of factoring large numbers and properties of modular exponentiation.

### 2. Computer Science

Modular arithmetic is used in hashing algorithms, checksums, and cryptographic hash functions to ensure data integrity and security.

### 3. Number Theory

In number theory, modular arithmetic helps solve congruences and Diophantine equations, contributing to the understanding of integer properties and relationships.

### 4. Digital Signal Processing

Modular arithmetic is used in algorithms for efficient computation in digital signal processing, particularly in the Fast Fourier Transform (FFT) and error-correcting codes.

### 5. Clock Arithmetic

The concept of modular arithmetic is akin to how clocks work, where the hours wrap around after reaching 12 or 24.

## Conclusion – Modular Arithmetic

Modular arithmetic is a powerful mathematical tool with wide-ranging applications in cryptography, computer science, number theory, and digital signal processing. Its properties and rules enable efficient computation and problem-solving in various domains. Understanding modular arithmetic is essential for professionals and researchers in these fields.

## FAQs on Modular Arithmetic

#### What is modular arithmetic?

> Modular arithmetic is a system of arithmetic for integers, where numbers wrap around upon reaching a certain value, known as the modulus.

#### How is modular arithmetic used in cryptography?

> Modular arithmetic is fundamental in cryptography, especially in public-key cryptosystems like RSA, which rely on properties of modular exponentiation.

#### What are the basic operations in modular arithmetic?

> The basic operations include addition, subtraction, multiplication, exponentiation, and division, each performed within the confines of a given modulus.

#### How is modular arithmetic applied in computer science?

> It is used in hashing algorithms, checksums, and cryptographic hash functions to ensure data integrity and security.

#### Why is modular arithmetic important in digital signal processing?

> It is used in efficient computation algorithms like the Fast Fourier Transform (FFT) and error-correcting codes, reducing computational complexity.

</div>
