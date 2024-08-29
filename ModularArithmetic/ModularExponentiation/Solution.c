#include <stdio.h>

//function that calculate modular exponentiation x^n mod m.
int modpower(int x, int n, int m) 
{
    if (n == 0) //base case 
        return 1 % m; 
    long long u = modpower(x, n / 2, m);  
    u = (u * u) % m;
    if (n % 2 == 1) // when 'n' is odd
        u = (u * x) % m;
    return u;
}

//driver function
int main()
{ 
    printf("%d\n", modpower(5, 2, 7));
    return 0;
}
