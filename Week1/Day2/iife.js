/* Use Cases Of IIFE
Avoid polluting the global namespace.
To create closures in JavaScript.
IIFE is used to create private and  public variables and methods.
It is used to execute the async and await function.
It is used to work with require function.
 */
/* 
Immediately Invoked Function Expressions (IIFE) in JavaScript

Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.
 They are typically used to create a local scope for variables to prevent them from polluting the global scope.

Syntax: */


(function (a) {
    if (a.length > 10) {
        console.log( "length is greater than 10")
    } else {
        console.log( "length is less than 10")
    }
}("abcdefghi"))


// An IIFE can return a value just like any other function.