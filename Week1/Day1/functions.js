//function declaration

function FnName(){
  //this fn is regular function
}

// this function will hoist which means wherever we call we will get this fn values
// FnName() // returns values


//function expression 

let a=function rin(){
 // this is function expression
}
// when we call this function like rin()  it will returns not defined because when we call a function expression
// the global execution context will assign the variable to local memory not function 
// so we call like a()
// but it cannot hoist value when we call before initialize 

// anonymous fn

// function without function name is anonymous fn

var fn=function(){
    //anonymous fn
    // can be reusable by callinf variable name fn()
}

// IIFE(immediatly invoking fy=unction expression)
//this function will called immediatley during it defines



// (function(){
//     console.log("hai")
// }())



// Self-Executing Anonymous Functions
// Another common use of anonymous functions is to create self-executing functions (also known as IIFE - Immediately Invoked Function Expressions).
//  These functions run immediately after they are defined.

(function () {
	console.log("Welcome to GeeksforGeeks!");
})();

