import java.util.*;
 
class LinearDiophantineEquations {
     
    // Function to find the GCD of two numbers
    public static int gcd(int a, int b) {
        if (a == 0) {
            return b;
        }
        return gcd(b % a, a);
    }
     
    // Function to check if integral solutions are possible
    public static boolean isPossible(int a, int b, int c) {
        int gcd = gcd(a, b);
        return (c % gcd == 0);
    }
     
    // Driver function
    public static void main(String[] args) {
        int a = 3, b = 6, c = 9;
        if (isPossible(a, b, c)) {
            System.out.println("Possible");
        } else {
            System.out.println("Not Possible");
        }
    }
}
