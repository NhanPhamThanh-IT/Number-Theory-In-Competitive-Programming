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
