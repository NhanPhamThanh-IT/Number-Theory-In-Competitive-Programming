<?php
// PHP program to find multiplicative modulo 
// inverse using Extended Euclid algorithm.
// Function to find modulo inverse of a
function modInverse($A, $M)
{
    $x = 0;
    $y = 0;
    $g = gcdExtended($A, $M, $x, $y);
    if ($g != 1)
        echo "Inverse doesn't exist";
    else
    {
        // m is added to handle negative x
        $res = ($x % $M + $M) % $M;
        echo "Modular multiplicative " . 
                   "inverse is " . $res;
    }
}

// function for extended Euclidean Algorithm
function gcdExtended($a, $b, &$x, &$y)
{
    // Base Case
    if ($a == 0)
    {
        $x = 0;
        $y = 1;
        return $b;
    }

    $x1;
    $y1; // To store results of recursive call
    $gcd = gcdExtended($b%$a, $a, $x1, $y1);

    // Update x and y using results of 
    // recursive call
    $x = $y1 - (int)($b/$a) * $x1;
    $y = $x1;

    return $gcd;
}

// Driver Code
$A = 3;
$M = 11;

// Function call
modInverse($A, $M);

?>
