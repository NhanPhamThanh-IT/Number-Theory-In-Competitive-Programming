<?php
// PHP program to find modular inverse of a
// under modulo m using Fermat's little theorem.
// This program works only if m is prime.
 
 
// To compute x raised to
// power y under modulo m
// Recursive function to 
// return gcd of a and b
function __gcd($a, $b)
{
     
    // Everything divides 0 
    if ($a == 0 || $b == 0)
    return 0;
 
    // base case
    if ($a == $b)
        return $a;
 
    // a is greater
    if ($a > $b)
        return __gcd($a-$b, $b);
    return __gcd($a, $b-$a);
}
 
// Function to find modular
// inverse of a under modulo m
// Assumption: m is prime
function modInverse($a, $m)
{
    if (__gcd($a, $m) != 1)
        echo "Inverse doesn't exist";
 
    else
    {
 
        // If a and m are relatively
        // prime, then modulo inverse
        // is a^(m-2) mode m
        echo "Modular multiplicative inverse is ",
                             power($a,$m - 2, $m);
    }
}
 
// To compute x^y under modulo m
function power($x, $y, $m)
{
    if ($y == 0)
        return 1;
    $p = power($x,$y / 2, $m) % $m;
    $p = ($p * $p) % $m;
 
    return ($y % 2 == 0) ? $p : ($x * $p) % $m;
}
 
    // Driver Code
    $a = 3; $m = 11;
    modInverse($a, $m);
     
?>
