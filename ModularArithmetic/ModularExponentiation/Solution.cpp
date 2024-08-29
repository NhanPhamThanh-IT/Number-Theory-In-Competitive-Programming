#include<bits/stdc++.h>
#include<iostream>

using namespace std;

//function that calculate modular exponentiation x^n mod m.
int modpower(int x, int n, int m) 
{
    if (n == 0) //base case 
        return 1%m; 
    long long u = modpower(x,n/2,m);  
    u = (u*u)%m;
    if (n%2 == 1) //when 'n' is odd
        u = (u*x)%m;
    return u;
}

//driver function
int main()
{ 
    cout<<modpower(5,2,7)<<endl;
    return 0;
}
