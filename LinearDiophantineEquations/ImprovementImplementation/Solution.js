// Function to find the GCD of two numbers
    function gcd(a, b) {
    if (a === 0) {
        return b;
    }
    return gcd(b % a, a);
}
 
// Function to check if integral solutions are possible
function isPossible(a, b, c) {
    let gcdValue = gcd(a, b);
    return (c % gcdValue === 0);
}
 
 // Driver function
let a = 3,
    b = 6,
    c = 9;
if (isPossible(a, b, c)) {
    console.log("Possible");
} else {
    console.log("Not Possible");
}
