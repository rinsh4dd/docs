/* let n = 5;  // Outer variable
function a() {
    let n = 10;  // Inner variable that shadows the outer one
    console.log(n);  // 10 (inner n is used here)
}
a();
console.log(n);  // 5 (outer n is still used here) */

// 10
// 5

/* 1. Shadowing with var

When we declare the variable with var, it only exists within the function in which it is declared even if it is inside an if or for loop.
 If we have a variable with the same name outside the function, the variable inside the function will hide the outer one.

 */
/*
var a = 10;  // Outside the function

function t() {
    var a= 20;  // Inside the function, 'n' is different
    console.log(a);  // Prints 20
}

t();
console.log(a);  // Prints 10 (the one outside the function)
 */
// 2. Shadowing with let and const.

// When we declare the variable with the let or const, the variable only exists inside the block (like an if statement or a loop).
//  If we use the same name for a variable inside the block, it will hide the one outside the block.
//   This is different from var, which is only limited to the function.




// let n = 10;

// if (true) {
//     let n = 20;  // Shadows the outer 'a'
//     console.log(n);  // 20
// }

// console.log(n);  // 10

/* let a = 10
function x() {
    let a = 200
    return a
}
console.log(x())
console.log(a) */

//200
//10


// let a = 10
// {
//     let a = 200
//     console.log(a)
// }
// console.log(a)
//200
//10



// let a = 10
// {
//     var a = 200
// console.log(a)}

// console.log(a)

// illegal shadowing

// let a = 10
// {
//     let a = 200
//     console.log(a)
//     {
//         let a
//     }
// }

// console.log(a)

// var a=20;
// {
//     var a=200;
//     console.log(a)
// }
// console.log(a)


"use strict"
var a=10
{
    let a=100
    console.log(a)
}
console.log(a)