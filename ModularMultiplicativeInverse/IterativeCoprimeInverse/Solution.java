// Iterative Java program to find modular
// inverse using extended Euclid algorithm

class Solution {

    // Returns modulo inverse of a with
    // respect to m using extended Euclid
    // Algorithm Assumption: a and m are
    // coprimes, i.e., gcd(A, M) = 1
    static int modInverse(int A, int M)
    {
        int m0 = M;
        int y = 0, x = 1;

        if (M == 1)
            return 0;

        while (A > 1) {
            // q is quotient
            int q = A / M;

            int t = M;

            // m is remainder now, process
            // same as Euclid's algo
            M = A % M;
            A = t;
            t = y;

            // Update x and y
            y = x - q * y;
            x = t;
        }

        // Make x positive
        if (x < 0)
            x += m0;

        return x;
    }

    // Driver code
    public static void main(String args[])
    {
        int A = 3, M = 11;

        // Function call
        System.out.println("Modular multiplicative "
                           + "inverse is "
                           + modInverse(A, M));
    }
}
