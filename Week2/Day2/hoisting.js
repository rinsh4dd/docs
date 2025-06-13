// console.log(a)
// console.log(b)

// const { isFunction } = require("node:util");

// function ab(){
//     console.log ("ab is called")
// }
// var a=100;
// let b=100;


//temporal dead zone

/* console.log(b)
/* |
|
|
|
|
->temporal dead zone
|
|
| */
// const b=10

 
/*  func()
function func(){
    console.log(a)
     var a=10
} */

 //undefined

 /*  func()
function func(){
    console.log(a)
     let a=10
} */
 //ReferenceError: Cannot access 'a' before initialization