/* Block Scope
Before the ECMA6(2015) we have only global and function scope but when the Let and Const keywords were introduced in ES6 they provide the block scope.

Variables that are declared inside the { } (curly braces) can only access inside that scope not from the outside of it. */


// Variables declared with var do not have block scope only let and const have block scope.

function a() {

    //fn scoped

    let abc=100;
    {
        var variable_1 = "GFG";
        const variable_2 = "Geeksforgeeks";
        let x = 2;
        x *= 2;
        console.log(x);
        console.log(variable_2);
    }

    console.log(variable_1);
}

a()
/*  if i try to console.log(x) outside the block it  prints x is not defined */