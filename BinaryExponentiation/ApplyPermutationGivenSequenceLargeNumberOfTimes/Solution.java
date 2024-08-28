import java.util.Arrays;

public class BinaryExponentiation {

    // Binary exponentiation
    static void apply(int[] S, int[] P) {
        int[] temp = Arrays.copyOf(S, S.length);
        for (int i = 1; i < S.length; i++) {
            temp[i] = S[P[i]];
        }
        System.arraycopy(temp, 1, S, 1, S.length - 1);
    }

    // Function to apply Permutation P to Sequence S
    // K number of times
    static void solve(int[] S, int[] P, int K) {
        while (K > 0) {
            if ((K & 1) == 1) {
                apply(S, P);
            }
            apply(P, P);
            K >>= 1;
        }
    }

    public static void main(String[] args) {
        int[] P = {0, 2, 3, 4, 1};
        int[] S = {0, 2, 1, 3, 4};
        int K = 2;
        solve(S, P, K);
        System.out.print("New Sequence = ");
        for (int i = 1; i < S.length; i++) {
            System.out.print(S[i] + " ");
        }
    }
}
