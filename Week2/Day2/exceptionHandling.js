// syntax error

const { error } = require("console");

// Syntax Errors: This happens when the code doesn't follow the correct syntax (e.g., missing parentheses, brackets, or commas).

// console.log("Hello World" 

// out :SyntaxError: missing ) after argument list

// Reference Errors: Occurs when we try to access a variable that hasn’t been declared.

// console.log(x)

// Type Errors: This happens when a value is not of the expected type (e.g., trying to call a method on undefined).



// let num = 5;
// num.toUpperCase(); // TypeError: num.toUpperCase is not a function



// try {
//     let res = 10 / 0;
//     if (!isFinite(res)) {
//         throw new Error("Cannot divide by zero");
//     }
//     console.log(res);
// } catch (e) {
//     console.error("Error occurred:", e.message);
// } finally {
//     console.log("Execution completed");
// }


try {

    let x = y+1

}
catch (e) {
    console.log("Error occured", e.name, e.message)
    throw new ReferenceError("error 404!")

}
finally {
    console.log("Execution is completed")
}


