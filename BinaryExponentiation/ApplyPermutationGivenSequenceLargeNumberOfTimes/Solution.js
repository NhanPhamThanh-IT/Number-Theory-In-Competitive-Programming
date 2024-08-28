// Function to apply permutation P to sequence S
// K number of times
function solve(S, P, K) {
    // Helper function to apply permutation P to sequence S
    function apply(S, P) {
        const temp = Array(S.length);
        for (let i = 1; i < S.length; i++) {
            temp[i] = S[P[i]];
        }
        for (let i = 1; i < S.length; i++) {
            S[i] = temp[i];
        }
    }

    // Perform binary exponentiation to optimize
    // the application of permutations
    while (K > 0) {
        if (K & 1) {
            apply(S, P);
        }
        apply(P, P);
        K >>= 1;
    }
}

// Main function
function main() {
    // Initial sequence S and permutation P
    const P = [0, 2, 3, 4, 1];
    const S = [0, 2, 1, 3, 4];
    const K = 2; // Number of times to apply permutation P to sequence S

    // Apply permutation P to sequence S K times
    solve(S, P, K);

    // Output the new sequence
    process.stdout.write("New Sequence = ");
    for (let i = 1; i < S.length; i++) {
        process.stdout.write(S[i] + " ");
    }
}

// Call the main function to execute the program
main();
