/* Recursion is a process in which a function calls itself as a subroutine. 
This allows the function to be repeated several times, as it can call itself during its execution.
 Recursion is often used to solve problems that can be broken down into smaller, similar subproblems.



 */
/* Base Case:

This is the condition that stops the recursion.
Without a base case, the function will call itself indefinitely, leading to a stack overflow.
Example: If calculating the factorial of a number, the base case is when the number is 0 or 1.

Recursive Case:

This is where the function calls itself with a modified input.
The input is typically modified to move closer to the base case.
Example: For factorial, the recursive case is n * factorial(n - 1). */

/* 
[syntax
function recursiveFunction(parameters) {
  // Base case: stopping condition
  if (baseCase) {
    return baseCaseValue;
  }

  // Recursive case: function calls itself
  return recursiveFunction(modifiedParameters);
}] */


  function factorial(val){
    if(val==0 || val == 1){
        return 1
    }else{
       return val*factorial(val-1)
    }
    
}
console.log(factorial(5))