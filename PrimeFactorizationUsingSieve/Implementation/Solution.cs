// C# program to find prime factorization of a
// number n in O(Log n) time with precomputation
// allowed.
using System;
using System.Collections;

class Solution {
    static int MAXN = 100001;

    // stores smallest prime factor for every number
    static int[] spf = new int[MAXN];

    // Calculating SPF (Smallest Prime Factor) for every
    // number till MAXN.
    // Time Complexity : O(nloglogn)
    static void sieve()
    {
        spf[0] = 0;
        spf[1] = 1;
        for (int i = 2; i < MAXN; i++) {
            // marking smallest prime factor for every
            // number = 1.
            spf[i] = 1;
        }
        for (int i = 2; i < MAXN; i++) {
            if (spf[i]== 1) { // if the number is prime ,mark
                        // all its multiples who havent
                        // gotten their spf yet
                for (int j = i; j < MAXN; j += i) {
                    if (spf[j]== 1) { // if its smallest prime
                                // factor is 1 means its spf
                                // hasnt been found yet so
                                // change it to i
                        spf[j] = i;
                    }
                }
            }
        }
    }

    // A O(log n) function returning primefactorization
    // by dividing by smallest prime factor at every step
    static ArrayList getFactorization(int x)
    {
        ArrayList ret = new ArrayList();
        while (x != 1) {
            ret.Add(spf[x]);
            x = x / spf[x];
        }
        return ret;
    }

    // Driver code
    public static void Main()
    {
        // precalculating Smallest Prime Factor
        sieve();
        int x = 12246;
        Console.Write("prime factorization for " + x
                      + " : ");

        // calling getFactorization function
        ArrayList p = getFactorization(x);

        for (int i = 0; i < p.Count; i++)
            Console.Write(p[i] + " ");
        Console.WriteLine("");
    }
}
