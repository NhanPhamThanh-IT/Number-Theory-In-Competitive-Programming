const mod = BigInt(1e9 + 7); // BigInt constant for the modulo operation

// Function to multiply two very large numbers
function multiply(A, B) {
    let ans = BigInt(0); // Initialize ans as BigInt
    while (B) {
        if (B & BigInt(1)) { // Bitwise AND operation, checking if the least significant bit is set
            ans = (ans + A) % mod; // BigInt arithmetic
        }
        A = (A + A) % mod; // BigInt arithmetic
        B >>= BigInt(1); // Bitwise right shift by 1 position
    }
    return ans;
}

// Main function
function main() {
    const A = BigInt(1e9); // BigInt constant for A
    const B = BigInt(1e9); // BigInt constant for B
    console.log(multiply(A, B).toString()); // Output the result as string
}

// Call the main function
main();
