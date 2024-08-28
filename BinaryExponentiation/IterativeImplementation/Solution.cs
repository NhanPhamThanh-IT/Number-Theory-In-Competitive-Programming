using System;

class Program {
    // Function to calculate power
    static long Power(long a, long b)
    {
        long result = 1;
        while (b > 0) {
            if ((b & 1) == 1)
                result *= a;
            a *= a;
            b >>= 1;
        }
        return result;
    }

    static void Main() { Console.WriteLine(Power(2, 12)); }
}
