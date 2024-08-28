// Function to calculate the power of a number (a) raised to the power of b modulo mod
function power(a, b) {
    const mod = 1000000007;
    let result = 1;
    while (b > 0) {
        // If the current bit of b is set, multiply the result by a and take modulo mod
        if (b & 1)
            result = (result * a) % mod;

        // Square the value of a and reduce it modulo mod
        a = (a * a) % mod;

        // Right shift b to move to the next bit
        b >>= 1;
    }
    return result;
}

// Output the result of 2^42 modulo mod
console.log(power(2, 42));
