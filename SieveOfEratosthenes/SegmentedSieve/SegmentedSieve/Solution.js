// JavaSCript program to print all primes smaller than
// n using segmented sieve

// This functions finds all primes smaller than 'limit'
// using simple sieve of eratosthenes. It also stores
// found primes in vector prime[]

let res = "";

function simpleSieve(limit, prime)
{
    // Create a boolean array "mark[0..n-1]" and initialize
    // all entries of it as true. A value in mark[p] will
    // finally be false if 'p' is Not a prime, else true.
    let mark = new Array(limit+1).fill(true);
    
    for (let p=2; p*p<limit; p++)
    {
        // If p is not changed, then it is a prime
        if (mark[p] === true)
        {
            // Update all multiples of p
            for (let i=p*p; i<limit; i+=p){
                mark[i] = false;
            }
        }
    }

    // Print all prime numbers and store them in prime
    for (let p=2; p<limit; p++)
    {
        if (mark[p] === true)
        {
            prime.push(p);
            res = res + p + " ";
        }
    }
}

// Prints all prime numbers smaller than 'n'
function segmentedSieve(n)
{
    // Compute all primes smaller than or equal
    // to square root of n using simple sieve
    let limit = Math.floor(Math.sqrt(n))+1;
    let prime = new Array(limit);
    
    simpleSieve(limit, prime);

    // Divide the range [0..n-1] in different segments
    // We have chosen segment size as sqrt(n).
    let low = limit;
    let high = 2*limit;

    // While all segments of range [0..n-1] are not processed,
    // process one segment at a time
    while (low < n)
    {
        if (high >= n){
            high = n;
        }
            
        // To mark primes in current range. A value in mark[i]
        // will finally be false if 'i-low' is Not a prime,
        // else true.
        let mark = new Array(limit+1).fill(true);

        // Use the found primes by simpleSieve() to find
        // primes in current range
        for (let i = 0; i < prime.length; i++)
        {
            // Find the minimum number in [low..high] that is
            // a multiple of prime[i] (divisible by prime[i])
            // For example, if low is 31 and prime[i] is 3,
            // we start with 33.
            let loLim = Math.floor(low/prime[i]) * prime[i];
            if (loLim < low){
                loLim += prime[i];
            }
                
            /* Mark multiples of prime[i] in [low..high]:
                We are marking j - low for j, i.e. each number
                in range [low, high] is mapped to [0, high-low]
                so if range is [50, 100] marking 50 corresponds
                to marking 0, marking 51 corresponds to 1 and
                so on. In this way we need to allocate space only
                for range */
            for (let j=loLim; j<high; j+=prime[i]){
                mark[j-low] = false;
            }            
        }

        // Numbers which are not marked as false are prime
        for (let i = low; i<high; i++){
              if (mark[i - low] == true){
                res = res + i + " ";
            }  
        }
        // Update low and high for next segment
        low = low + limit;
        high = high + limit;
    }
    console.log(res);
}

// Driver program to test above function
let n = 100;
console.log("Primes smaller than", n);
segmentedSieve(n);
