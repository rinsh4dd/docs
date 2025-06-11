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

// let myMap= new Map();
// let anotherMap= new Map([
//     ['qualification',function qua(){
//         return "bca"
//     }],
//     ['place','malappuram'],
//     ['age',20]
// ])
// console.log('hello' + t)

// anotherMap.delete('name')
// anotherMap.set('nameAfterDelete',"Rinshad")
// anotherMap.set("age",21)
// console.log(anotherMap.get('qualification')())
// anotherMap.forEach((x,y)=>{console.log(y," : " ,x)})

//unique val using map

// let arr=[1,1,2,4,3,5,6,5,6]
// let map=new Map()
// let arr2=[]

// for(i=0;i<arr.length;i++){
//    if(!map.has(arr[i])){
//     map.set(arr[i],true),
//     arr2.push(arr[i])
//    }

// }
//  console.log(map)
//  console.log(arr2)


// let arr = [1, 2, 3, 4, 5, 6,7,10,8]
// let Largest = arr[0]
// let secLargest = arr[0]
// for (i = 0; i < arr.length; i++) {
//     if (arr[i]>Largest) {
//         secLargest=Largest
//         Largest=arr[i]
//     }else if (arr[i] > secLargest && arr[i] != Largest) {
//         secLargest = arr[i];
//     }
// }
//  console.log(secLargest)





// let arr=[10,20,30,40,80,60,80,50]

// let Largest=arr[0]//10//20//30//40//50//
// let secLargest=arr[0]//10//20//30//40//
// for(i=0;i<arr.length;i++){
//    if(arr[i]>Largest){
//     secLargest=Largest
//     Largest=arr[i]
//    }else if(arr[i]>secLargest && arr[i]!=Largest){
//     secLargest=arr[i]
//    }
// }

// console.log(Largest)
// console.log(secLargest)

// let arr=[1,2,3,4,5,6,5,6]

// let uniqueArr=[...new Set(arr)]
// // let arr2=uniqueArr.sort((a,b)=>{
// //     return b-a

// // })
// const secLargest=uniqueArr[1]
// console.log(uniqueArr)

// let greet = function(){
//     console.log("hello")
// }

// setTimeout(greet,5000)

// function createGreeter(){
//     return greet
// }
// console.log(createGreeter())

// function higherOrderFn(callback){
//     callback()
// }
// console.log(higherOrderFn(()=>"hey"))


// function rest(...nums){
// return nums.reduce((a,b)=>a+=b)
// }
// console.log(rest(1,2,3,4,5))


// let arr=[1,2,3,4,5]
// let max=Math.max(...arr)

// console.log(max)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 }; 
// console.log(obj2)

// function logNames(...names) {
//    names.forEach(name => console.log(name));
// }
// logNames("Rinshad","Arsha")

// function demo(a, b, ...rest) {
//   console.log(rest);
// }
// demo(1, 2, 3, 4, 5); 

// const user = {
//   name: 'John',
//   age: 30
// };
// const {name ,age}=user

// console.log(name)
// console.log(age)