<?php
// Iterative PHP program to find modular
// inverse using extended Euclid algorithm

// Returns modulo inverse of a with respect
// to m using extended Euclid Algorithm
// Assumption: a and m are coprimes, i.e.,
// gcd(a, m) = 1
function modInverse($A, $M)
{
    $m0 = $M;
    $y = 0;
    $x = 1;

    if ($m == 1)
    return 0;

    while ($A > 1)
    {
        
        // q is quotient
        $q = (int) ($A / $M);
        $t = $M;

        // m is remainder now,
        // process same as
        // Euclid's algo
        $M = $A % $M;
        $A = $t;
        $t = $y;

        // Update y and x
        $y = $x - $q * $y;
        $x = $t;
    }

    // Make x positive
    if ($x < 0)
    $x += $m0;

    return $x;
}

    // Driver Code
    $A = 3;
    $M = 11;

    // Function call
    echo "Modular multiplicative inverse is: ",
                            modInverse($A, $M);
        
?>
