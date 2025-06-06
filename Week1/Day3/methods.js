/*  1. What is a Method (Deep Definition)?
✅ A method is:
A function that is stored as a property inside an object.

That’s it. When a function belongs to an object, it becomes a method of that object.
 */

/* All methods are functions,
but not all functions are methods. */

// 2. Basic Example of a Method




let person = {
    
  name: "Rinshad",
  greet: function () {
    console.log("Hi, I'm " +this.name);
  }
};


person.greet(); // "Hi, I'm Rinshad"


// let name="Hai"

// let person = {
//   name: "Rinshad",
//   greet: function () {
//     console.log("Hi, I'm " + name);
//   }
// };


// person.greet(); // "Hi, I'm Hai"

/* in in the above code we got  output like "Hi, I'm Hai"
because we havent put this keyword so it took the data from lexical parent of the object
 */


/* “What is a method?”
“A method is a function that is a property of an object. It defines behavior for the object,
 allowing it to perform actions or computations related to its data.
 Methods can access the object’s properties using the this keyword.” */