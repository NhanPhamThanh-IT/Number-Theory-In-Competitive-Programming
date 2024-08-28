#include <bits/stdc++.h>
using namespace std;

const int mod = 1e9 + 7;

// function to multiply to very large numbers
int multiply(int A, int B) {
    int ans = 0;
    while(B) {
        if(B & 1) {
            ans = (ans + A) % mod;
        }
        A = (A + A) % mod;
        B >>= 1;
    }
    return ans;
}

int main() {

    int A = 1e9, B = 1e9;
    cout << multiply(A, B);
    return 0;
}
