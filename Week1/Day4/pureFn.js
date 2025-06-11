/* A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.

Pure functions return consistent results for identical inputs.
They do not modify external states or depend on mutable data.
Often used with immutable data structures to ensure reliability.
Their independence from external states makes them highly reusable.
 */
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 
// console.log(add(2, 3));
/* 
It always returns the same result for the same input.
It does not modify any external variables or state.
Note: Generally, we use the Pure function in JavaScript for any purpose.  */
/* 
Characteristics of Pure Functions

Deterministic Output:
 For a given set of inputs, the output is always the same.
No Side Effects:
 {The function does not:
Modify variables outside its scope.
Interact with external systems like APIs, databases, or DOM manipulation.
Change mutable data.
Immutability: Pure functions do not change the input values; instead, they return a new value or object.} */



/* Example of a Function with Side Effects
Here, increment is not a pure function because it modifies the external variable count.
 */


// let c = 0;
// ​
// function inc() {
//     c++;
//     return c;
// }
// console.log(inc());
// console.log(inc());

//1
//2


/* 
Impure Functions: What to Avoid
Impure functions produce unpredictable results or affect external states, which can lead to bugs and make your code harder to test.
 */
// let user = { name: "Meeta", age: 25 };
// ​
// function updated(newAge) {
//     user.age = newAge;
//     return user;
// }
// ​
// console.log(updated(26)); 
// // Alters the global `user` object
// console.log(user.age);


// let count = 0
// function num(a, b) {
//     count = a + b;
//     return count
// }
// console.log(num(15, 556))



// function sayGoodBye(){
//     console.log("Good bye")
// }


// function greet(name,nafila){
//     console.log("Hello ," +name)
//     callback()
// }


// greet ("Rinshad",)



