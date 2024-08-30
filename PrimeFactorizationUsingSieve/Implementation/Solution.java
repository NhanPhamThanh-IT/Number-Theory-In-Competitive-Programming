// Java program to find prime factorization of a
// number n in O(Log n) time with precomputation
// allowed.

import java.util.Vector;

class Test {
    static final int MAXN = 100001;

    // stores smallest prime factor for every number
    static int spf[] = new int[MAXN];

    // Calculating SPF (Smallest Prime Factor) for every
    // number till MAXN.
    // Time Complexity : O(nloglogn)
    static void sieve()
    {
        spf[0] = 0;
        spf[1] = 1;
        for (int i = 2; i < MAXN; i++) {
            // marking smallest prime factor for every
            // number to be 1.
            spf[i] = 1;
        }
        for (int i = 2; i < MAXN; i++) {
            if (spf[i] == 1) { // if the number is prime ,mark
                               // all its multiples who havent
                               // gotten their spf yet
                for (int j = i; j < MAXN; j += i) {
                    spf[j] = i;// if its smallest prime factor is
                                       // 1 means its spf hasnt been
                                       // found yet so change its spf to i
                }
            }
        }
    }

    // A O(log n) function returning primefactorization
    // by dividing by smallest prime factor at every step
    static Vector<Integer> getFactorization(int x)
    {
        Vector<Integer> ret = new Vector<>();
        while (x != 1) {
            ret.add(spf[x]);
            x = x / spf[x];
        }
        return ret;
    }

    // Driver method
    public static void main(String args[])
    {
        // precalculating Smallest Prime Factor
        sieve();
        int x = 12246;
        System.out.print("prime factorization for " + x
                         + " : ");

        // calling getFactorization function
        Vector<Integer> p = getFactorization(x);

        for (int i = 0; i < p.size(); i++)
            System.out.print(p.get(i) + " ");
        System.out.println();
    }
}
