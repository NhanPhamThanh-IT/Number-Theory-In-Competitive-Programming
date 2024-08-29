<script>
// JavaScript program to find multiplicative modulo
// inverse using Extended Euclid algorithm.

// Global Variables
let x, y;

// Function for extended Euclidean Algorithm
function gcdExtended(a, b){
     
    // Base Case
    if (a == 0)
    {
        x = 0;
        y = 1;
        return b;
    }
     
    // To store results of recursive call    
    let gcd = gcdExtended(b % a, a);
    let x1 = x;
    let y1 = y;

    // Update x and y using results of recursive
    // call
    x = y1 - Math.floor(b / a) * x1;
    y = x1;
 
    return gcd;
}

function modInverse(a, m)
{
    let g = gcdExtended(a, m);
    if (g != 1){
        document.write("Inverse doesn't exist");
    }
    else{
         
        // m is added to handle negative x
        let res = (x % m + m) % m;
        document.write("Modular multiplicative inverse is ", res);
        }
}

// Driver Code
{
    let a = 3, m = 11;
   
    // Function call
    modInverse(a, m);
}
 
// This code is contributed by Gautam goel (gautamgoel962)
</script>
