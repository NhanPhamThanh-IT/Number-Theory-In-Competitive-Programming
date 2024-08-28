import java.io.*;
class Solution {
    static long power(long A, long B) {
        if (B == 0)
            return 1;

        long res = power(A, B / 2);

        if (B % 2 == 1)
            return res * res * A;
        else
            return res * res;
    }

    public static void main(String[] args) {
        System.out.println(power(2, 12));
    }
}
