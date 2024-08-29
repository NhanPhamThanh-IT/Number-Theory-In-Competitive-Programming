// C# program to find modular
// inverse of a under modulo M
// This program works only if
// M is prime.
using System;
class Solution {

    // Function to find modular
    // inverse of A under modulo
    // M Assumption: M is prime
    static void modInverse(int A, int M)
    {
        int g = gcd(A, M);
        if (g != 1)
            Console.Write("Inverse doesn't exist");
        else {
            // If A and M are relatively
            // prime, then modulo inverse
            // is A^(M-2) mod M
            Console.Write(
                "Modular multiplicative inverse is "
                + power(A, M - 2, M));
        }
    }

    // To compute x^y under
    // modulo M
    static int power(int x, int y, int M)
    {
        if (y == 0)
            return 1;

        int p = power(x, y / 2, M) % M;
        p = (p * p) % M;

        if (y % 2 == 0)
            return p;
        else
            return (x * p) % M;
    }

    // Function to return
    // gcd of a and b
    static int gcd(int a, int b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }

    // Driver Code
    public static void Main()
    {
        int A = 3, M = 11;

        // Function call
        modInverse(A, M);
    }
}
