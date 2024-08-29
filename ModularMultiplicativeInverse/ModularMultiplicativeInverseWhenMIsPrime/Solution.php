<?php
// PHP program to find modular 
// inverse of A under modulo M
// This program works only if M
// is prime.

// Function to find modular
// inverse of A under modulo
// M Assumption: M is prime
function modInverse( $A, $M)
{
    $g = gcd($A, $M);
    if ($g != 1)
        echo "Inverse doesn't exist";
    else
    {
        
        // If A and M are relatively 
        // prime, then modulo inverse
        // is A^(M-2) mod M
        echo "Modular multiplicative inverse is "
                        , power($A, $M - 2, $M);
    }
}

// To compute x^y under modulo m
function power( $x, $y, $M)
{
    if ($y == 0)
        return 1;
    $p = power($x, $y / 2, $M) % $M;
    $p = ($p * $p) % $M;

    return ($y % 2 == 0)? $p : ($x * $p) % $M;
}

// Function to return gcd of a and b
function gcd($a, $b)
{
    if ($a == 0)
        return $b;
    return gcd($b % $a, $a);
}

// Driver Code
$A = 3;
$M = 11;

// Function call
modInverse($A, $M);
    
// This code is contributed by anuj_67.
?>
