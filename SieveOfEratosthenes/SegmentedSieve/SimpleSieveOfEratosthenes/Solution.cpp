#include <iostream>
#include <vector>

void simpleSieve(int limit) {
    // Create a boolean array "mark[0..limit-1]" and
    // initialize all entries of it as true. A value
    // in mark[p] will finally be false if 'p' is Not
    // a prime, else true.
    std::vector<bool> mark(limit, true);

    // One by one traverse all numbers so that their
    // multiples can be marked as composite.
    for (int p = 2; p * p < limit; p++) {
        // If p is not changed, then it is a prime
        if (mark[p] == true) {
            // Update all multiples of p
            for (int i = p * p; i < limit; i += p)
                mark[i] = false;
        }
    }

    // Print all prime numbers and store them in prime
    for (int p = 2; p < limit; p++)
        if (mark[p] == true)
            std::cout << p << " ";
}

int main() {
    int limit = 100; 
    simpleSieve(limit);
    return 0;
}
