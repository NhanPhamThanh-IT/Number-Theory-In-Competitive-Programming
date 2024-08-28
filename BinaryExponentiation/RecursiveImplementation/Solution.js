// Function to calculate the power of a number A raised to the power of B
function power(A, B) {
    if (B === 0) {
        return 1;
    }

    let res = power(A, Math.floor(B / 2));

    if (B % 2 === 1) {
        return res * res * A;
    } else {
        return res * res;
    }
}

// Driver code
console.log(power(2, 12));
