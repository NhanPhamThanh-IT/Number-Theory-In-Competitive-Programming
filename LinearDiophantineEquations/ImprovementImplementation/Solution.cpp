#include <bits/stdc++.h>
using namespace std;
 
// Function to find the GCD of two numbers
int gcd(int a, int b)
{
    if (a == 0) {
        return b;
    }
    return gcd(b % a, a);
}
 
// Function to check if integral solutions are possible
bool isPossible(int a, int b, int c)
{
    int gcd_val = gcd(a, b);
    return (c % gcd_val == 0);
}
 
// Driver function
int main()
{
    int a = 3, b = 6, c = 9;
    if (isPossible(a, b, c)) {
        cout << "Possible" << endl;
    }
    else {
        cout << "Not Possible" << endl;
    }
    return 0;
}
