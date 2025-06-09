/* A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

There are several different types of higher order functions like map and reduce. We will discuss these later in this tutorial.
 But before that let's first dive deep into what higher order functions are. */
// Callback function, passed as a parameter in the higher order function
/* function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction); */


/* 
// How Higher Order Functions Work
So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner,
 the first solution that comes to our mind is to write each separate function to calculate area or diameter. */

/*  const radius = [1, 2, 3];
// function to calculate area of the circle
const calculateArea =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
} */
// function to calculate diameter of the circle
/* const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
console.log(calculateDiameter(radius))
But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable, are they?

So, let's see how we can write the same code using HOFs:

const radius = [1, 2, 3];
// logic to clculate area
const area = function(radius){
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function(radius){
    return 2 * radius;
}
// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
Now, as you can see in the above code, we have only written a single function calculate()
 to calculate the area and diameter of the circle. We only need to write the logic and pass it to calculate() and the function will do the job.

The code that we have written using HOFs is concise and modular.
 Each function is doing its own job and we are not repeating anything here. */

/*  How to Use Higher Order Functions
You can use higher order functions in a variety of ways.

When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.

When working with objects, you can use the Object.entries() function to create a new array from an object.

When working with functions, you can use the compose() function to create complex functions from simpler ones.

How to Use Some Important Higher Order Functions
There are various built in HOFs, and some of the most common ones are map(), filter() and reduce(). So let's understand each one of these in detail.

How to use map() in JavaScript
The map() function takes an array of values and applies a transformation to each value in the array. It does not mutate the original array.
 It is often used to transform an array of data into a new array with a different structure. */


function area(radius) {
    return Math.PI * radius * radius
}

function diameter(radius) {
    return 2 * radius
}
function circumference(radius) {
    return 2 * Math.PI *radius *radius
}


const radius = [5, 6, 9, 8, 7]
const calculateArea = function (radius,logic ) {
    let output = []
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculateArea(radius, area))
console.log(calculateArea(radius, diameter))
console.log(calculateArea(radius, circumference))


