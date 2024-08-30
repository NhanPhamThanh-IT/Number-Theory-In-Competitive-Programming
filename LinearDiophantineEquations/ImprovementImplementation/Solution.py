class LinearDiophantineEquations:
     
    # Function to find the GCD of two numbers
    def gcd(self, a, b):
        if a == 0:
            return b
        return self.gcd(b % a, a)
     
    # Function to check if integral solutions are possible
    def isPossible(self, a, b, c):
        gcd = self.gcd(a, b)
        return c % gcd == 0
     
    # Driver function
    def main(self):
        a, b, c = 3, 6, 9
        if self.isPossible(a, b, c):
            print("Possible")
        else:
            print("Not Possible")
         
# Create an object of the class and call the main function
ld = LinearDiophantineEquations()
ld.main()
