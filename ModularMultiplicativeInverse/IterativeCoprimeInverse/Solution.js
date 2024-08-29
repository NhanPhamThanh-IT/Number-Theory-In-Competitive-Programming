<script>

// Iterative Javascript program to find modular
// inverse using extended Euclid algorithm

// Returns modulo inverse of a with respect
// to m using extended Euclid Algorithm
// Assumption: a and m are coprimes, i.e.,
// gcd(a, m) = 1
function modInverse(a, m)
{
    let m0 = m;
    let y = 0;
    let x = 1;

    if (m == 1)
        return 0;

    while (a > 1)
    {
        
        // q is quotient
        let q = parseInt(a / m);
        let t = m;

        // m is remainder now,
        // process same as
        // Euclid's algo
        m = a % m;
        a = t;
        t = y;

        // Update y and x
        y = x - q * y;
        x = t;
    }

    // Make x positive
    if (x < 0)
        x += m0;

    return x;
}

// Driver Code
let a = 3;
let m = 11;

// Function call
document.write(`Modular multiplicative inverse is ${modInverse(a, m)}`);

</script>
