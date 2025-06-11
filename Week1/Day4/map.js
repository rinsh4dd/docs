// const { get } = require("http");

const { get } = require("http");
const { CloudHail } = require("lucide-react");

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

