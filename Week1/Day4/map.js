// const { get } = require("http");

// let map = new Map();
// map.set("Rinshad", "javascript")
// map.set("arsha", "CVT")
// map.set("mihal", "html")
// console.log(map.has("Rinshad"))
// console.log(map.keys())
// console.log(map.get("Rinshad"))


// for ( [k,v] of map){
//     console.log(k," : ",v)
// }




let myMap= new Map();
let anotherMap= new Map([
    ['name','Rinshad'],
    ['place','malappuram'],
    ['age',20]
])

anotherMap.delete('name')
anotherMap.set('nameAfterDelete',"Rinshad")
anotherMap.set("age",21)
console.log(anotherMap)
anotherMap.forEach((x,y)=>{console.log(y," : " ,x)})