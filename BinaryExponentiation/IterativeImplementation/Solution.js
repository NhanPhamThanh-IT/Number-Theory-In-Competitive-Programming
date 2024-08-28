// Function to calculate the power of a number
function power(a, b) {
    let result = 1;
    while (b > 0) {
        // If b is odd, multiply result by a
        if (b & 1) {
            result *= a;
        }
        // Square a
        a *= a;
        // Divide b by 2 using bitwise right shift
        b >>= 1;
    }
    return result;
}

// Main function
function main() {
    // Output the result of power(2, 12)
    console.log(power(2, 12));
}

// Call the main function
main();
