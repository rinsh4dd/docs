/*  
An arrow function is a shorter syntax for writing functions in JavaScript.
 Introduced in ES6, arrow functions allow for a more concise and readable code, especially in cases of small functions.
 Unlike regular functions, arrow functions don't have their own this, but instead, inherit it from the surrounding context.
*/

/* Arrow functions are written with the => symbol, which makes them compact.
They don't have their own this. They inherit this from the surrounding context.
For functions with a single expression, the return is implicit, making the code more concise.
Arrow functions do not have access to the arguments object, which is available in regular functions.
Like any variable, an arrow function can be declared using const, var or let.
 However it is a best practice to use const with arrow function unless we have a strong reason to reassign them,
*/



const greet = () => {
	console.log("Welcome to GeeksforGeeks!");
}
    
greet();


// In this example, a simple arrow function with a single expression is used.

const greet2 = () => console.log("Welcome to GeeksforGeeks2!");

greet2();
 

const makePerson=(firstName,Lastname)=>({First : firstName,last : Lastname})
console.log(makePerson("Mohammed",'Rinshad'))
