let name = {
    firstName: "Mohammed",
    lastName: "Rinshad",

}
let printName = function (state, pin) {
    console.log(this.firstName + " " + this.lastName + "  " + state + " ," + pin)
}

let name2 = {
    firstName: "Dewald",
    lastName: "Brevis"
}
let name3 = {
    firstName: "sachin",
    lastName: "Tendulkar"
}

//call 
printName.call(name2, "Mumbai", 979556)


//apply
printName.apply(name, ["kerala", 676551])


//bind
let printMyName = printName.bind(name3,"maharashtra",955995)
printMyName() 


