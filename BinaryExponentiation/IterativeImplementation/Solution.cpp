#include <bits/stdc++.h>
using namespace std;

long long power(long long a, long long b) {
    long long result = 1;
    while(b) {
        if (b & 1) 
        result = result * a;
        a = a * a;
        b >>= 1;
    }
    return result;
}

int main() {
    cout<<power(2, 12)<<"\n";
    return 0;
}
