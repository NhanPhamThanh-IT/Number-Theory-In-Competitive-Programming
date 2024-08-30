// Javascript program to generate all
  // prime numbers smaller than N in O(N)
 
  const MAX_SIZE = 1000001;
 
  // isPrime[] : isPrime[i] is true if the number is prime
  // prime[] : stores all prime numbers less than N
  // SPF[] that store smallest prime factor of number
  // [for Exp : smallest prime factor of '8' and '16'
  // is '2' so we put SPF[8] = 2 , SPF[16] = 2 ]
  var isPrime = Array.from({ length: MAX_SIZE }, (_, i) => true);
  var prime = [];
  var SPF = Array.from({ length: MAX_SIZE });
 
  // function that generates all prime number
  // less than N in O(N)
  function manipulated_sieve(N) {
   
    // 0 and 1 are not prime
    isPrime[0] = isPrime[1] = true;
 
    // Fill rest of the entries
    for (let i = 2; i < N; i++)
    {
      // If isPrime[i] === true, 
      // then i is a prime number
      if (isPrime[i])
      {
        // put i into prime[] array
        prime.push(i);
 
        // A prime number is its own smallest
        // prime factor
        SPF[i] = i;
      }
 
      // Remove all multiples of  i*prime[j] which are
      // not prime by making isPrime[i*prime[j]] = false
      // and put smallest prime factor of i*Prime[j] as prime[j]
      // [ for exp :let  i = 5 , j = 0 , prime[j] = 2 [ i*prime[j] = 10 ]
      // so smallest prime factor of '10' is '2' that is prime[j] ]
      // this loop run only one time for number which are not prime
      for (
        let j = 0;
        j < prime.length && i * prime[j] < N && prime[j] <= SPF[i];
        j++
      ) {
        isPrime[i * prime[j]] = false;
 
        // put smallest prime factor of i*prime[j]
        SPF[i * prime[j]] = prime[j];
      }
    }
  }
 
  // Driver Code
  var N = 13; // Must be less than MAX_SIZE
 
  manipulated_sieve(N);
   
  // print all prime numbers less than N
  for (let i = 0; i < prime.length && prime[i] <= N; i++) {
    document.write(prime[i] + " ");
  }
