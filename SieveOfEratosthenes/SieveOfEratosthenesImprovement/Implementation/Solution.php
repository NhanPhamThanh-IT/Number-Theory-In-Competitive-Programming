<?php
// PHP program to generate all 
// prime numbers less than N in O(N) 
 
$MAX_SIZE = 10001;
 
// isPrime[] : isPrime[i] is true if
//               number is prime 
// prime[] : stores all prime number 
//             less than N 
// SPF[] that store smallest prime 
// factor of number [for ex : smallest 
// prime factor of '8' and '16' 
// is '2' so we put SPF[8] = 2 , 
// SPF[16] = 2 ] 
$isprime = array_fill(0, $MAX_SIZE, true); 
$prime = array(); 
$SPF = array_fill(0, $MAX_SIZE, 0); 
 
// function generate all prime number 
// less than N in O(n) 
function manipulated_seive($N) 
{
    global $isprime, $MAX_SIZE,
                     $SPF, $prime;
     
    // 0 and 1 are not prime 
    $isprime[0] = $isprime[1] = false;
 
    // Fill rest of the entries 
    for ($i = 2; $i < $N; $i++)
    { 
     
        // If isPrime[i] == True then 
        // i is prime number 
        if ($isprime[$i]) 
        {
         
            // put i into prime[] vector 
            array_push($prime, $i); 
 
            // A prime number is its own  
            // smallest prime factor 
            $SPF[$i] = $i;
        }
         
        // Remove all multiples of i*prime[j] 
        // which are not prime by making is
        // Prime[i * prime[j]] = false and put
        // smallest prime factor of i*Prime[j]
        // as prime[j] [ for exp :let i = 5 , j = 0 ,
        // prime[j] = 2 [ i*prime[j] = 10 ] 
        // so smallest prime factor of '10' is '2' 
        // that is prime[j] ] this loop run only  
        // one time for number which are not prime 
        $j = 0;
        while ($j < count($prime) &&
               $i * $prime[$j] < $N &&
               $prime[$j] <= $SPF[$i])
       {
            $isprime[$i * $prime[$j]] = false;
 
            // put smallest prime factor of i*prime[j] 
            $SPF[$i * $prime[$j]] = $prime[$j];
             
            $j += 1;
        }
    }
}
         
// Driver Code
$N = 13; // Must be less than MAX_SIZE 
 
manipulated_seive($N); 
 
// print all prime number less than N 
$i = 0;
while ($i < count($prime) && 
       $prime[$i] <= $N)
{
    print($prime[$i] . " "); 
    $i += 1;
}
     
?>
