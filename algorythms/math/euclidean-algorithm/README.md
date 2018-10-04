# Euclidean algorithm

Euclidean algorithm (or Euclid's algorithm), is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largestnumber that divides both of them without leaving a remainder.

When implementing the algorithm, we need to divide by modulus a larger number for a smaller. If the result is not zero, then we repeat theoperation, dividing the previous divisor by the divisor result modulo.

The operation is repeated until the result of the division is zero. When the result of division becomes zero, then the divisor is the greatestcommon divisor (GCD).