// function that calculates modular exponentiation x^n mod m.
function modpower(x, n, m) {
    if (n == 0) { // base case
        return 1 % m;
    }
    let u = modpower(x, Math.floor(n / 2), m);
    u = (u * u) % m;
    if (n % 2 == 1) { // when 'n' is odd
        u = (u * x) % m;
    }
    return u;
}

// driver function
console.log(modpower(5, 2, 7));
