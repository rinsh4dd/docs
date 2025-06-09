/* What is Prototype in JavaScript ?
    In JavaScript, the prototype is a container for methods and properties.
 When methods or properties are added to the prototype of a function, array, or string,
    they become shared by all instances of that particular object type.
Prototype in general can be understood as a mould and all its instances can be considered as the car made from it. */

Object.prototype.print = function () {
    console.log('I am from object prototype')
}
let b = {
    name: 'Pranjal',
    age: 21
}
b.print()

// Output
// I am from object prototype

/* How Prototype Works in JavaScript?

In JavaScript, each object has an internal [[Prototype]] property, which points to another object. 
This allows the object to inherit properties and methods from its prototype.
When you access a property or method on an object, JavaScript first checks the object itself.
 If it's not found, it looks in the object's prototype and continues up the prototype chain until it either finds the property or reaches null.
Functions in JavaScript have a prototype property. This is where you add properties or methods that you want to be available to all instances of objects created by that constructor function.
Objects created using a constructor function inherit properties and methods from the constructor's prototype.
 This allows for reusable code and shared behaviour across multiple objects.
You can add new properties or methods to an object's prototype, and all instances of that object will automatically have access to the new functionality. 
This is a common way to extend built-in objects like Array or Object. */


/* Adding method to prototype

This code defines a sum method on the Array.prototype to calculate the sum of all elements in an array. 
It then calls this method on two different arrays, arr and arr2, and logs the results.

 */


let a1 = [1, 2, 3, 4, 5]
let a2 = [5, 6, 7, 8, 9]
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}
console.log(a1.sum())
console.log(a2.sum())

// Output
// 15
// 35
/* 
The sum method is added to Array.prototype, so it can be used by any array to calculate the sum of its elements.
Inside the sum method, this refers to the array the method is called on, allowing it to loop through and sum its elements.
The sum() method is called on both a1 and a2, and it correctly computes and logs the sum for each array (15 for a1 and 35 for a2). */