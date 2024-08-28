import java.math.BigInteger;

public class Main {
    // Modulo constant
    static final BigInteger MOD = new BigInteger("1000000007");

    // Function to multiply two very large numbers
    static BigInteger multiply(BigInteger A, BigInteger B) {
        BigInteger ans = BigInteger.ZERO;
        while (!B.equals(BigInteger.ZERO)) {
            if (B.and(BigInteger.ONE).equals(BigInteger.ONE)) {
                ans = (ans.add(A)).mod(MOD);
            }
            A = (A.add(A)).mod(MOD);
            B = B.shiftRight(1);
        }
        return ans;
    }

    public static void main(String[] args) {
        BigInteger A = new BigInteger("1000000000");
        BigInteger B = new BigInteger("1000000000");
        System.out.println(multiply(A, B));
    }
}
