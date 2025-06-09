// let name = {
//     firstName: "Mohammed",
//     lastName: "Rinshad",

// }
// let printName = function (state, pin) {
//     console.log(this.firstName + " " + this.lastName + "  " + state + " ," + pin)
// }

// let name2 = {
//     firstName: "Dewald",
//     lastName: "Brevis"
// }
// let name3 = {
//     firstName: "sachin",
//     lastName: "Tendulkar"
// }

// //call 
// printName.call(name2, "Mumbai", 979556)


// //apply
// printName.apply(name, ["kerala", 676551])


// //bind
// let printMyName = printName.bind(name3,"maharashtra",955995)
// printMyName() 



let obj1 = {
    name: "Rinshad",
    age: 21,

}
let fullDetails=function(state){
    console.log(this.name + " is "+ this.age +" year old and lives in " + state)
}
let obj2 = {
    name: "Sulaiman",
    age:25,
}
let obj3 = {
    name: "Arsha",
    age:21,
}
fullDetails.call(obj1, "malappuram")
fullDetails.apply(obj2, ["maharashtra"])
let fullDetailsNew=fullDetails.bind(obj3,"Puthanathani")
fullDetailsNew()