/* An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs,
 where each key is a unique identifier for the associated value.
  Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor. */

/* 1. Creation Using Object Literal */

let obj = {
    name: "Rinshad",
    age: 21,
    job: "Developer"
};
console.log(obj);

// 2. Creation Using new Object() Constructor



let obj1 = new Object();
obj1.name = "Rinshad",
    obj1.age = 21,
    obj1.job = "Developer"

console.log(obj1);


// Basic Operations on JavaScript Objects
/* 
1. Accessing Object Properties
You can access an object’s properties using either dot notation or bracket notation


 */

let obj2 = { "name a": "Rinshad", age: 21 };

// Using Dot Notation
console.log(obj2["name a"]);

// Using Bracket Notation
console.log(obj2["age"]);

// 3. Adding Properties to an Object
let obj3 = { model: "Tesla" };
obj3.color = "Red";

console.log(obj3);



// 4. Removing Properties from an Object

// The delete operator removes properties from an object.




let obj4 = { model: "Tesla", color: "Red" };
delete obj4.color;

console.log(obj4);

// 5. Checking if a Property Exists
// You can check if an object has a property using the in operator or hasOwnProperty() method.


let obj5 = { model: "Tesla" };
console.log("color" in obj5);
console.log(obj5.hasOwnProperty("model"));


// Iterating Through Object Properties
// Use for...in loop to iterate through the properties of an object.




// let obj = { name: "Sourav", age: 23 };
// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }


// 7. Merging Objects
// Objects can be merged using Object.assign() or the spread syntax { ...obj1, ...obj2 }.




let obj_1 = { name: "Sourav" };
let obj_2 = { age: 23};

// let obj_3 = { ...obj_1, ...obj_2 };
let obj_3=Object.assign(obj_1,obj_2)

console.log(obj_3);


// 8. Object Length
// You can find the number of properties in an object using Object.keys().




let obj_4 = { name: "Sourav", age: 23 };
console.log(Object.keys(obj_4).length);

