#include <bits/stdc++.h>
using namespace std;

long long power(long long A, long long B)
{
    if (B == 0)
        return 1;

    long long res = power(A, B / 2);

    if (B % 2)
        return res * res * A;
    else
        return res * res;
}

int main()
{
    cout << power(2, 12) << "\n";
    return 0;
}
