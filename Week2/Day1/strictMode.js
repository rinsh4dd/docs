
// function a(){
//     x=10    
// }
// a()
// console.log(x)

//output will be 10 because it will be considered as (var / let / const =x)

// "use strict"
// function a() {
//     x = 10
// }
// a()
// console.log(x)

// output will be referemce error:x is undefined

// because when strict mode is turned on this type of declarations will consider as error



// let obj={
//     "use strict"
//     name:"rinshad"
// }
// console.log(obj)

// SyntaxError: Unexpected identifier 'name'



// "use strict"
//  obj={
    
//     name:"rinshad"
// }
// console.log(obj)

// ReferenceError: obj is not defined



// "use strict"
// const obj = Object.freeze({ prop: 42 });
// obj.prop = 50;