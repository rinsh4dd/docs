/* Function Scope
Those variables that are declared inside a function have local or function scope which means,
 variables that are declared inside the function are not accessible outside that function. */

//  Note: Functions and Objects are also variables in Javascript.

/* Variables which are declared within the function have function scope. When var declared in the function have a function scope.
 Function uses the curly braces to store the function body .
 Therefore, block scope and function scope is same for the function body. */

 function greet() {
  var message = "Hello, Rinshad!";
  console.log(message); // ✅ Works here
}

console.log(message); // ❌ Error: message is not defined


function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a); //  a is accessible (var is function-scoped)
  console.log(b); //  Error (let is block-scoped)
}


