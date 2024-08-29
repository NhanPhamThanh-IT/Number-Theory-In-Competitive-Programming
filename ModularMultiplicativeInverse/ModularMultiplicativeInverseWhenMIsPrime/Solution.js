<script>
// Javascript program to find modular inverse of a under modulo m
// This program works only if m is prime.

// Function to find modular inverse of a under modulo m
// Assumption: m is prime
function modInverse(a, m)
{
    let g = gcd(a, m);
    if (g != 1)
        document.write("Inverse doesn't exist");
    else 
    {
        // If a and m are relatively prime, then modulo
        // inverse is a^(m-2) mode m
        document.write("Modular multiplicative inverse is "
             + power(a, m - 2, m));
    }
}

// To compute x^y under modulo m
function power(x, y, m)
{
    if (y == 0)
        return 1;
    let p = power(x, parseInt(y / 2), m) % m;
    p = (p * p) % m;

    return (y % 2 == 0) ? p : (x * p) % m;
}

// Function to return gcd of a and b
function gcd(a, b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

// Driver code
let a = 3, m = 11;

// Function call
modInverse(a, m);

// This code is contributed by subham348.
</script>
