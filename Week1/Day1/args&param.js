// Argument

function hello() {
        console.log(arguments[0]);
    }
    
    hello("GFG");

    // The arguments is an object which is local to a function.
    //  You can think of it as a local variable that is available with all functions by default except arrow functions in JavaScript. 

     /*In this example, we are passing "GFG" as a parameter to a function hello( ).
      As we know we can access the parameter passed to a function using arguments object with the help of indexes.
      It's similar to accessing array elements using indexes.-*/


    //   parameter

   /* Function parameters are variables defined in the function declaration that receive values (arguments) when the function is called.
     They play a key role in making functions reusable and dynamic*/

//      function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Meeta"));


// Parameter: name in the function definition.
// Argument: "Meeta" passed when calling the function.