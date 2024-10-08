// C# program to generate all prime numbers
// less than N in O(N)
using System;
using System.Collections.Generic;
 
class Test {
  static int MAX_SIZE = 1000001;
 
  // isPrime[] : isPrime[i] is true if number is prime
  // prime[] : stores all prime number less than N
  // SPF[] that store smallest prime factor of number
  // [for Exp : smallest prime factor of '8' and '16'
  // is '2' so we put SPF[8] = 2 , SPF[16] = 2 ]
  static List<bool> isprime = new List<bool>(MAX_SIZE);
  static List<int> prime = new List<int>();
  static List<int> SPF = new List<int>(MAX_SIZE);
 
  // method generate all prime number less than N in O(n)
  static void manipulated_seive(int N)
  {
    // 0 and 1 are not prime
    isprime[0] = false;
    isprime[1] = false;
 
    // Fill rest of the entries
    for (int i = 2; i < N; i++)
    {
 
      // If isPrime[i] == True then i is
      // prime number
      if (isprime[i])
      {
 
        // put i into prime[] vector
        prime.Add(i);
 
        // A prime number is its own smallest
        // prime factor
        SPF[i] = i;
      }
 
      // Remove all multiples of  i*prime[j] which are
      // not prime by making isPrime[i*prime[j]] =
      // false and put smallest prime factor of
      // i*Prime[j] as prime[j] [for exp :let  i = 5,
      // j = 0, prime[j] = 2 [ i*prime[j] = 10] so
      // smallest prime factor of '10' is '2' that is
      // prime[j] ] this loop run only one time for
      // number which are not prime
      for (int j = 0;
           j < prime.Count && i * prime[j] < N
           && prime[j] <= SPF[i];
           j++) {
        isprime[i * prime[j]] = false;
 
        // put smallest prime factor of i*prime[j]
        SPF[i * prime[j]] = prime[j];
      }
    }
  }
 
  // Driver method
  public static void Main(string[] args)
  {
    int N = 13; // Must be less than MAX_SIZE
 
    // initializing isprime and spf
    for (int i = 0; i < MAX_SIZE; i++) {
      isprime.Add(true);
      SPF.Add(2);
    }
 
    manipulated_seive(N);
 
    // print all prime number less than N
    for (int i = 0; i < prime.Count && prime[i] <= N;
         i++)
      Console.Write(prime[i] + " ");
  }
}
