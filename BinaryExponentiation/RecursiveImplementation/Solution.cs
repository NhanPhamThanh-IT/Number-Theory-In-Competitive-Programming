using System;

class Program
{
    // Recursive function to calculate the power of a number (A^B)
    static long Power(long A, long B)
    {
        // Base case: A^0 is always 1
        if (B == 0)
            return 1;

        // Recursive calculation of A^(B/2)
        long res = Power(A, B / 2);

        // Multiply the result by itself
        res *= res;

        // If B is odd, multiply by A one more time
        if (B % 2 != 0)
            res *= A;

        return res;
    }

    static void Main()
    {
        // Example: Calculate and print the result of 2^12
        Console.WriteLine(Power(2, 12));
    }
}
