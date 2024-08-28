public class Main {
    public static long power(long a, long b) {
        long result = 1;
        while (b > 0) {
            if ((b & 1) == 1) {
                result *= a;
            }
            a *= a;
            b >>= 1;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(power(2, 12));
    }
}
