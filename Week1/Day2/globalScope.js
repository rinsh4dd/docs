/* Global Scope
Those variables which are declared outside the function or blocks or you can say curly braces({}) are having a global scope.

In a JavaScript program, global variables can be accessed from anywhere.

The scope of var, let, and const are quite equivalent when declared outside the function. */

var global_variable1 = "Geeksforgeeks";
let global_variable2 = "Geeks";
const global_variable3 = "GFG";

function check_global_variables(){
    console.log(global_variable1);
    console.log(global_variable2);
    console.log(global_variable3);
}

check_global_variables();

/* 
In this example,
 we will declare all the variables outside the function and now we can access those variables from anywhere in the Javascript program. */