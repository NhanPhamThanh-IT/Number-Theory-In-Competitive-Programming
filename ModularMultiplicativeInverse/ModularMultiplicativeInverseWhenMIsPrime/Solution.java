// Java program to find modular
// inverse of A under modulo M
// This program works only if
// M is prime.
import java.io.*;

class Solution {

    // Function to find modular inverse of a
    // under modulo M Assumption: M is prime
    static void modInverse(int A, int M)
    {
        int g = gcd(A, M);
        if (g != 1)
            System.out.println("Inverse doesn't exist");
        else {
            // If a and m are relatively prime, then modulo
            // inverse is a^(m-2) mode m
            System.out.println(
                "Modular multiplicative inverse is "
                + power(A, M - 2, M));
        }
    }

    static int power(int x, int y, int M)
    {
        if (y == 0)
            return 1;
        int p = power(x, y / 2, M) % M;
        p = (int)((p * (long)p) % M);
        if (y % 2 == 0)
            return p;
        else
            return (int)((x * (long)p) % M);
    }

    // Function to return gcd of a and b
    static int gcd(int a, int b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }

    // Driver Code
    public static void main(String args[])
    {
        int A = 3, M = 11;

        // Function call
        modInverse(A, M);
    }
}
