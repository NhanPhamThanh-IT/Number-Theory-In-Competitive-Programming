// C# program to find multiplicative modulo
// inverse using Extended Euclid algorithm.

using System;

public class Solution {
    public static int x, y;

    // Function for extended Euclidean Algorithm
    static int gcdExtended(int a, int b)
    {

        // Base Case
        if (a == 0) {
            x = 0;
            y = 1;
            return b;
        }

        // To store results of recursive call
        int gcd = gcdExtended(b % a, a);
        int x1 = x;
        int y1 = y;

        // Update x and y using results of recursive
        // call
        x = y1 - (b / a) * x1;
        y = x1;

        return gcd;
    }

    // Function to find modulo inverse of a
    static void modInverse(int A, int M)
    {
        int g = gcdExtended(A, M);
        if (g != 1)
            Console.Write("Inverse doesn't exist");
        else {

            // M is added to handle negative x
            int res = (x % M + M) % M;
            Console.Write(
                "Modular multiplicative inverse is " + res);
        }
    }

    // Driver Code
    public static void Main(string[] args)
    {
        int A = 3, M = 11;

        // Function call
        modInverse(A, M);
    }
}
