#include <bits/stdc++.h>;
using namespace std;

const int mod = 1e9 + 7;

long long power(long long a, long long b)
{
    long long result = 1;
    while (b) {
        if (b & 1)
            result = (result * a) % mod;
        a = (a * a) % mod;
        b >>= 1;
    }
    return result;
}

int main()
{
    cout << power(2, 42) << "\n";
    return 0;
}
