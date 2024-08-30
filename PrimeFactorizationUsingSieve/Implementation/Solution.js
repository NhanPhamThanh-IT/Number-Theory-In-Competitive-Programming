<script>
// Javascript program to find prime factorization of a
// number n in O(Log n) time with precomputation
// allowed.

const MAXN = 100001;
let spf = new Array(MAXN + 1).fill(1);

// Calculating SPF (Smallest Prime Factor) for every
// number till MAXN.
// Time Complexity : O(nloglogn)

function sieve() {
    // stores smallest prime factor for every number
    spf[0] = 0;
    for (let i = 2; i <= MAXN; i++) {
        if (spf[i] === 1) { // if the number is prime ,mark
                            // all its multiples who havent
                            // gotten their spf yet
            for (let j = i; j <= MAXN; j += i) {
                if (spf[j] === 1) { // if its smallest prime factor is
                                   // 1 means its spf hasnt been
                                   // found yet so change it to i
                    spf[j] = i;
                }
            }
        }
    }
}
  
    // A O(log n) function returning primefactorization
    // by dividing by smallest prime factor at every step
    function getFactorization(x)
    {
        let ret =[];
        while (x != 1)
        {
            ret.push(spf[x]);
            x = Math.floor(x / spf[x]);
        }
        return ret;
    }
    
    // Driver method
    
    // precalculating Smallest Prime Factor
    sieve();
    let x = 12246;
    document.write("prime factorization for " + x + " : ");
    // calling getFactorization function
    let  p = getFactorization(x);
    for (let i=0; i<p.length; i++)
            document.write(p[i] + " ");
        document.write("<br>");
    
</script>
