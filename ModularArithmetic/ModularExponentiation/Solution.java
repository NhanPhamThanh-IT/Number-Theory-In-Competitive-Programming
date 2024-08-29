import java.util.*;

class Solution {
    //function that calculate modular exponentiation x^n mod m.
    public static int modpower(int x, int n, int m) {
        if (n == 0) //base case 
            return 1 % m; 
        long u = modpower(x, n / 2, m);  
        u = (u * u) % m;
        if (n % 2 == 1) // when 'n' is odd
            u = (u * x) % m;
        return (int)u;
    }

    //driver function
    public static void main(String[] args) {
        System.out.println(modpower(5, 2, 7));
    }
}
