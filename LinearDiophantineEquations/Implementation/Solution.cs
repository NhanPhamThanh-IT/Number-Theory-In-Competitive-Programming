// C# program to check for 
// solutions of diophantine 
// equations
using System;
 
class Solution 
{
     
    // Utility function to find 
    // the GCD of two numbers
    static int gcd(int a, int b)
    {
        return (a % b == 0) ? 
                Math.Abs(b) : 
               gcd(b, a % b);
    }
     
    // This function checks 
    // if integral solutions 
    // are possible
    static bool isPossible(int a,
                           int b, 
                           int c)
    {
        return (c % gcd(a, b) == 0);
    }
     
    // Driver Code
    public static void Main ()
    {
        // First example
        int a = 3, b = 6, c = 9;
        if(isPossible(a, b, c))
            Console.WriteLine("Possible");
        else
            Console.WriteLine("Not Possible");
     
        // Second example
        a = 3; b = 6; c = 8;
        if(isPossible(a, b, c))
            Console.WriteLine("Possible") ;
        else
            Console.WriteLine("Not Possible");
     
        // Third example
        a = 2; b = 5; c = 1;
        if(isPossible(a, b, c))
            Console.WriteLine("Possible");
        else
            Console.WriteLine("Not Possible");
    }
}
