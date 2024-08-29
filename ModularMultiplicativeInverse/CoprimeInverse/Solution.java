// java program to find multiplicative modulo
// inverse using Extended Euclid algorithm.
public class Solution {

    // Global Variables
    public static int x;
    public static int y;

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
        int tmp = b / a;
        x = y1 - tmp * x1;
        y = x1;

        return gcd;
    }

    static void modInverse(int A, int M)
    {
        int g = gcdExtended(A, M);
        if (g != 1) {
            System.out.println("Inverse doesn't exist");
        }
        else {

            // m is added to handle negative x
            int res = (x % M + M) % M;
            System.out.println(
                "Modular multiplicative inverse is " + res);
        }
    }

    // Driver code
    public static void main(String[] args)
    {
        int A = 3, M = 11;

        // Function Call
        modInverse(A, M);
    }
}
