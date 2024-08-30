using System;
 
class Solution
{
    // Function to find the GCD of two numbers
    static int GCD(int a, int b)
    {
        if (a == 0)
        {
            return b;
        }
        return GCD(b % a, a);
    }
 
    // Function to check if integral solutions are possible
    static bool IsPossible(int a, int b, int c)
    {
        int gcdVal = GCD(a, b);
        return (c % gcdVal == 0);
    }
 
    // Driver function
    static void Main(string[] args)
    {
        int a = 3, b = 6, c = 9;
        if (IsPossible(a, b, c))
        {
            Console.WriteLine("Possible");
        }
        else
        {
            Console.WriteLine("Not Possible");
        }
    }
}
