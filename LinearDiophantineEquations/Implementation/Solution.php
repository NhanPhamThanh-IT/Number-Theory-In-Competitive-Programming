<?php
// PHP program to check for solutions of 
// diophantine equations
 
// utility function to find the
// GCD of two numbers
function gcd($a, $b)
{
    return ($a % $b == 0) ? 
                  abs($b) : gcd($b, $a % $b);
}
 
// This function checks if integral 
// solutions are possible
function isPossible($a, $b, $c)
{
    return ($c % gcd($a, $b) == 0);
}
 
// Driver Code
 
// First example
$a = 3;
$b = 6;
$c = 9;
if(isPossible($a, $b, $c) == true)
    echo "Possible\n" ;
else
    echo "Not Possible\n";
 
// Second example
$a = 3;
$b = 6;
$c = 8;
 
if(isPossible($a, $b, $c) == true)
    echo "Possible\n" ;
else
    echo "Not Possible\n";
 
// Third example
$a = 2;
$b = 5;
$c = 1;
if(isPossible($a, $b, $c) == true)
    echo "Possible\n" ;
else
    echo "Not Possible\n";

?>
