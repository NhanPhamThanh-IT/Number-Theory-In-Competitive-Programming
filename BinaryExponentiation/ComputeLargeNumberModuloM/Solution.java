import java.util.*;

public class Main {
    // Constant representing the modulo value
    static final int mod = 1000000007;

    // Function to calculate the power of a number (a) raised to the power of b modulo mod
    public static long power(long a, long b) {
        long result = 1;
        while (b > 0) {
            // If the current bit of b is set, multiply the result by a
            if ((b & 1) == 1)
                result = (result * a) % mod;
            
            // Square the value of a and reduce it modulo mod
            a = (a * a) % mod;
            
            // Right shift b to move to the next bit
            b >>= 1;
        }
        return result;
    }

    public static void main(String[] args) {
        // Output the result of 2^42 modulo mod
        System.out.println(power(2, 42));
    }
}
