<div align="justify">

# <div align="center">Linear Diophantine Equations</div>

A Diophantine equation is a polynomial equation, usually in two or more unknowns, such that only the integral solutions are required. An Integral solution is a solution such that all the unknown variables take only integer values.

Given three integers a, b, c representing a linear equation of the form : ax + by = c. Determine if the equation has a solution such that x and y are both integral values.

__Examples__

```
Input : a = 3, b = 6, c = 9
Output: Possible
Explanation : The Equation turns out to be, 3x + 6y = 9 one integral solution would be x = 1 , y = 1

Input : a = 3, b = 6, c = 8
Output : Not Possible
Explanation : o integral values of x and y exists that can satisfy the equation 3x + 6y = 8

Input : a = 2, b = 5, c = 1
Output : Possible
Explanation : Various integral solutions possible are, (-2,1) , (3,-1) etc.
```

__Solution__

For linear Diophantine equation equations, integral solutions exist if and only if, the GCD of coefficients of the two variables divides the constant term perfectly. In other words, the integral solution exists if, GCD(a ,b) divides c.

Thus the algorithm to determine if an equation has integral solution is pretty straightforward. 

- Find GCD of a and b
- Check if c % GCD(a ,b) ==0
- If yes then print Possible
- Else print Not Possible

Below is the implementation of the above approach.

```cpp
// C++ program to check for solutions of diophantine
// equations
#include <bits/stdc++.h>
using namespace std;
 
//utility function to find the GCD of two numbers
int gcd(int a, int b)
{
    return (a%b == 0)? abs(b) : gcd(b,a%b);
}
 
// This function checks if integral solutions are
// possible
bool isPossible(int a, int b, int c)
{
    return (c%gcd(a,b) == 0);
}
 
//driver function
int main()
{
    // First example
    int a = 3, b = 6, c = 9;
    isPossible(a, b, c)? cout << "Possible\n" :
                        cout << "Not Possible\n";
 
    // Second example
    a = 3, b = 6, c = 8;
    isPossible(a, b, c)? cout << "Possible\n" :
                       cout << "Not Possible\n";
 
    // Third example
    a = 2, b = 5, c = 1;
    isPossible(a, b, c)? cout << "Possible\n" :
                       cout << "Not Possible\n";
 
    return 0;
}
```

__Output__

```
Possible
Not Possible
Possible
```

> **Time Complexity**: O(min(a,b))
>
> **Auxiliary Space**: O(1)

**How does this work?** Let GCD of ‘a’ and ‘b’ be ‘g’. g divides a and b. This implies g also divides (ax + by) (if x and y are integers). This implies gcd also divides ‘c’ using the relation that ax + by = c. Refer this wiki link for more details.

__New Approach__

**Step 1**: Find GCD of a and b using Euclidean algorithm:

- Divide the larger number by the smaller number and find the remainder.
- Repeat the process with the divisor (smaller number) and the remainder.
- Continue this process until the remainder becomes zero.
- The GCD will be the last non-zero remainder.

**Step 2**: Check if c is divisible by GCD(a, b).

- If c is divisible by GCD(a, b), then there exist integer solutions.
- Otherwise, there are no integer solutions.

Below is the implementation of the above approach:

```cpp
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
```

__Output__

```
Possible
```

**Time Complexity**: The time complexity of this program is dominated by the gcd function, which uses the Euclidean algorithm to compute the GCD of two numbers. The time complexity of the Euclidean algorithm is O(log min(a, b)), so the time complexity of the gcd function is O(log min(a, b)). Since the isPossible function calls the gcd function once, its time complexity is also O(log min(a, b)).

**Auxiliary Space**: The space complexity of this program is O(1), since we are only using a few integer variables (a, b, c, and gcd) and a few boolean and string variables (isPossible and the output string). None of these variables grow with the input size, so the space complexity is constant.

Therefore, the time complexity of this program is O(log min(a, b)) and the space complexity is O(1).

</div>
