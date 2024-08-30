function simpleSieve(limit) {
    // Create a boolean array "mark[0..limit-1]" and
    // initialize all entries of it as true. A value
    // in mark[p] will finally be false if 'p' is Not
    // a prime, else true.
    let mark = new Array(limit).fill(true);

    // One by one traverse all numbers so that their
    // multiples can be marked as composite.
    for (let p = 2; p * p < limit; p++) {
        // If p is not changed, then it is a prime
        if (mark[p] === true) {
            // Update all multiples of p
            for (let i = p * p; i < limit; i += p)
                mark[i] = false;
        }
    }

    // Print all prime numbers and store them in prime
    for (let p = 2; p < limit; p++)
        if (mark[p] === true)
            console.log(p + " ");
}

let limit = 100;  
simpleSieve(limit);
