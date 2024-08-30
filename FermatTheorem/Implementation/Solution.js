// Javascript program to find modular inverse of a
// under modulo m using Fermat's little theorem.
// This program works only if m is prime.
 
function __gcd(a, b)
{
    if(b == 0) 
    {
        return a;
    }
    else
    {
        return __gcd(b, a % b);
    }
}
// Function to find modular inverse of a under modulo m
// Assumption: m is prime
function modInverse(a, m)
{
    if (__gcd(a, m) != 1)
        document.write( "Inverse doesn't exist");
 
    else {
 
        // If a and m are relatively prime, then
        // modulo inverse is a^(m-2) mode m
        document.write( "Modular multiplicative inverse is "
             + power(a, m - 2, m));
    }
}
 
// To compute x^y under modulo m
function power(x, y, m)
{
    if (y == 0)
        return 1;
    var p = power(x, parseInt(y / 2), m) % m;
    p = (p * p) % m;
 
    return (y % 2 == 0) ? p : (x * p) % m;
}
 
// Driver Program
var a = 3, m = 11;
modInverse(a, m);
