// C program to find multiplicative modulo inverse using
// Extended Euclid algorithm.
#include <stdio.h>

// C function for extended Euclidean Algorithm
int gcdExtended(int a, int b, int* x, int* y);

// Function to find modulo inverse of a
void modInverse(int A, int M)
{
    int x, y;
    int g = gcdExtended(A, M, &x, &y);
    if (g != 1)
        printf("Inverse doesn't exist");
    else {
        // m is added to handle negative x
        int res = (x % M + M) % M;
        printf("Modular multiplicative inverse is %d", res);
    }
}

// C function for extended Euclidean Algorithm
int gcdExtended(int a, int b, int* x, int* y)
{
    // Base Case
    if (a == 0) {
        *x = 0, *y = 1;
        return b;
    }

    int x1, y1; // To store results of recursive call
    int gcd = gcdExtended(b % a, a, &x1, &y1);

    // Update x and y using results of recursive
    // call
    *x = y1 - (b / a) * x1;
    *y = x1;

    return gcd;
}

// Driver Code
int main()
{
    int A = 3, M = 11;

    // Function call
    modInverse(A, M);
    return 0;
}
