/* 
A function expression is a way to define a function as part of an expression making it versatile for assigning to variables,
 passing as arguments, or invoking immediately.

Function expressions can be named or anonymous.
They are not hoisted, meaning they are accessible only after their definition.
Frequently used in callbacks, closures, and dynamic function creation.
Enable encapsulation of functionality within a limited scope.
*/





let exp=function(name){
return `Hai ${name}`
}
// console.log(exp("rinshad"))
// console.log(exp("mihal"))


// Use Cases of Function Expressions

// 1. Storing in Variables

const add = function(x, y) {
    return x + y;
};
console.log(add(3, 5));

/*2. Callback Functions
They are commonly used as arguments in higher-order functions.
*/
setTimeout(function() {
    console.log("This message appears after 3 seconds!");
}, 3000);
