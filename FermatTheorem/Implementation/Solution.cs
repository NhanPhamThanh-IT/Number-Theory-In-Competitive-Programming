   
// C# program to find modular
// inverse of a under modulo m
// using Fermat's little theorem.
// This program works only if m is prime.
using System;
 
class GFG {
    static int __gcd(int a, int b)
    {
 
        if (b == 0) {
            return a;
        }
        else {
            return __gcd(b, a % b);
        }
    }
 
    // To compute x^y under modulo m
    static int power(int x, int y, int m)
    {
        if (y == 0)
            return 1;
        int p = power(x, y / 2, m) % m;
        p = (p * p) % m;
 
        return (y % 2 == 0) ? p : (x * p) % m;
    }
 
    // Function to find modular
    // inverse of a under modulo m
    // Assumption: m is prime
    static void modInverse(int a, int m)
    {
        if (__gcd(a, m) != 1)
            Console.WriteLine(
                "Modular multiplicative inverse is "
                + power(a, m - 2, m));
 
        else {
 
            // If a and m are relatively prime, then
            // modulo inverse is a^(m-2) mode m
            Console.WriteLine(
                "Modular multiplicative inverse is "
                + power(a, m - 2, m));
        }
    }
 
    // Driver code
    public static void Main()
    {
        int a = 3, m = 11;
        modInverse(a, m);
    }
}
