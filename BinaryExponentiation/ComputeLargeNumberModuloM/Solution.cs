using System;

class Program
{
    const int mod = 1000000007;

    static long power(long a, long b)
    {
        long result = 1;
        while (b > 0)
        {
            if ((b & 1) == 1)
                result = (result * a) % mod;
            a = (a * a) % mod;
            b >>= 1;
        }
        return result;
    }

    static void Main()
    {
        Console.WriteLine(power(2, 42));
    }
}
