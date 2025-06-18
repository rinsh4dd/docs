// const { json } = require("stream/consumers")

const { error } = require("console")
const { response } = require("express")

// fetch("https://catfact.ninja.fact")
//     .then((val) => val.text())
//     .then(res => console.log(res))
//     .catch(() => {
//         console.log("Fetching Api failed")
//     })


// fetch ("https://fakestoreapi.com/products")
// .then ((res)=>{
    //     if(!res.ok){
        //         throw new Error("Error  Adichuu",res.status)
        //     }return res.json()
        // })
        // .then((data)=>{
            //     console.log("Fetched Data",data)
            // })
            // .catch(error=>{
                //     console.log("Error occured")
                // })
                
                
                
                // fetch('https://fakestoreapi.com/products')
                //     .then((res) => res.json())
                //     .then((data) => console.log(data))
//     .catch((err) => {console.log("Fetching Error",err.messagae)}
//     )


// async function fetching() {
// try{
//     const dataFetch= await fetch("https://fakestoreapi.com/products")
//     const data= await dataFetch.json();
//     console.log("fetched",data)
// }catch(err){
// console.log(err.message)
// }
// }
// fetching();



// async function fetching() {
// try{
//     const res = await fetch("https://fakestoreapi.com/products")
//     const data = await res.json()
//     console.log("fetched",data)
// }catch(err){
//     console.log(err.message)
// }
// }
// fetching()



// async function getVal() {
//     const url = "https://example.org/products.json"

//     try{
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error ("Error"+response.status)
//         }
//         const data = await response.json()
//         console.log(data)
//     }catch(err){
//         console.log(err.message)
//     }
    
// }
// getVal()


fetch("https://fakestoreapi.com/products")

.then((res)=>res.json())
.then(data=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err.message)
})