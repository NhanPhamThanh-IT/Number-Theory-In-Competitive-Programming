<?php
// PHP program to find prime factorization 
// of a number n in O(Log n) time with 
// precomputation allowed.
define("MAXN", 100001);
$spf = array_fill(0, MAXN + 1, 1);

// Calculating SPF (Smallest Prime Factor) for every
// number till MAXN.
// Time Complexity : O(nloglogn)
function sieve() {
    global $spf;

    // stores smallest prime factor for every number
    $spf[0] = 0;
    for ($i = 2; $i <= MAXN; $i++) {
        if ($spf[$i] == 1) { // if the number is prime ,mark
                             // all its multiples who havent
                             // gotten their spf yet
            for ($j = $i; $j <= MAXN; $j += $i) {
                if ($spf[$j] == 1) { // if its smallest prime factor is
                                     // 1 means its spf hasnt been
                                     // found yet so change it to i
                    $spf[$j] = $i;
                }
            }
        }
    }
}

// A O(log n) function returning primefactorization
// by dividing by smallest prime factor at every step
function getFactorization($x)
{
    global $spf;
    $ret = array();
    while ($x != 1)
    {
        array_push($ret, $spf[$x]);
        if($spf[$x])
        $x = (int)($x / $spf[$x]);
    }
    return $ret;
}

// Driver Code

// precalculating Smallest 
// Prime Factor
sieve();
$x = 12246;
echo "prime factorization for " .
                      $x . " : ";

// calling getFactorization function
$p = getFactorization($x);

for ($i = 0; $i < count($p); $i++)
    echo $p[$i] . " ";

?>
