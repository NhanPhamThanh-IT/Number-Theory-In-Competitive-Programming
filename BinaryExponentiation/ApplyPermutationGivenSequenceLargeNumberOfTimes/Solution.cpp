#include <bits/stdc++.h>
using namespace std;

// binary exponentiation
void apply(vector<int>& S, vector<int>& P)
{
    vector<int> temp(S.size());
    for (int i = 1; i < S.size(); i++) {
        temp[i] = S[P[i]];
    }
    for (int i = 1; i < S.size(); i++)
        S[i] = temp[i];
}

// Function to apply Permutation P to Sequence S
// K number of times
void solve(vector<int>& S, vector<int>& P, int K)
{
    while (K) {
        if (K & 1)
            apply(S, P);
        apply(P, P);
        K >>= 1;
    }
}
int main()
{
    vector<int> P{ 0, 2, 3, 4, 1 };
    vector<int> S{ 0, 2, 1, 3, 4 };
    int K = 2;
    solve(S, P, K);
    cout << "New Sequence = ";
    for (int i = 1; i < S.size(); i++)
        cout << S[i] << " ";
    return 0;
}
