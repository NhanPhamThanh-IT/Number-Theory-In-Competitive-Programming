<div align="justify">

# <div align="center">Sieve Of Eratosthenes</div>

__Questions__: Given a number n, print all primes smaller than or equal to n. It is also given that n is a small number.

__Example__

```
Input : n =10
Output : 2 3 5 7 

Input : n = 20 
Output: 2 3 5 7 11 13 17 19
```

The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so.

__Following is the algorithm to find all the prime numbers less than or equal to a given integer n by the Eratosthene’s method:__

When the algorithm terminates, all the numbers in the list that are not marked are prime.

### Explanation with example

Let us take an example when n = 100. So, we need to print all prime numbers smaller than or equal to 100. 

We create a list of all numbers from 2 to 100.

<div align="center">
<img src="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/blob/main/SieveOfEratosthenes/Image/1.jpg">
</div>

According to the algorithm we will mark all the numbers which are divisible by 2 and are greater than or equal to the square of it.

<div align="center">
<img src="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/blob/main/SieveOfEratosthenes/Image/2.jpg">
</div>

Now we move to our next unmarked number 3 and mark all the numbers which are multiples of 3 and are greater than or equal to the square of it.

<div align="center">
<img src="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/blob/main/SieveOfEratosthenes/Image/3.jpg">
</div>

We move to our next unmarked number 5 and mark all multiples of 5 and are greater than or equal to the square of it.

<div align="center">
<img src="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/blob/main/SieveOfEratosthenes/Image/4.jpg">
</div>

We move to our next unmarked number 7 and mark all multiples of 7 and are greater than or equal to the square of it. 

<div align="center">
<img src="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/blob/main/SieveOfEratosthenes/Image/5.jpg">
</div>

We continue this process, and our final table will look like below:

<div align="center">
<img src="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/blob/main/SieveOfEratosthenes/Image/6.jpg">
</div>

__Final result__

So, the prime numbers are the unmarked ones: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 and 97.

### Complexity Analysis

__Time Complexity__: O(N*log(log(N)))

__Auxiliary Space__: O(N)

__You may also like to see:__

- <a href="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/tree/main/SieveOfEratosthenes/SegmentedSieve"><b>Segmented Sieve</b></a>
- <a href="https://github.com/NhanPhamThanh-IT/Number-Theory-In-Competitive-Programming/tree/main/SieveOfEratosthenes/SieveOfEratosthenesImprovement"><b>Sieve of Eratosthenes in O(n) time complexity</b></a>

</div>
