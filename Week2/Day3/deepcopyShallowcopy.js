// obj1={
//     name:"Rinshad",
//     place:"malappuram",
//     age:21
// }

const { json } = require("stream/consumers")

// obj2=obj1

// obj2.name="MohammedRinshad"

// console.log(obj1)
// console.log(obj2)

/* this  is Shallow copy which means the memory location is same so when we try to change the value inside obj2 it is reference of obj1
so the value in obj2 is also changed */

//DEEP COPY


// obj1={
//     name:"Rinshad",
//     Place:"malappuram",
//     address:{
//         location:"malappuram",
//         pin:676551
        
//     }
// }

// obj2=obj1

// obj2=JSON.parse(JSON.stringify(obj1))//deep copy
// obj2.name="Arsha"
// obj2.address.location="india"

// obj2.name="arsha"

// console.log(obj1)
// console.log(obj2)

obj1={
    name:"Rinshad",
    age:21,
    address:{
        location:"kotakkal",
        pin:676551
    }
}