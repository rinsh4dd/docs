// let prm = new Promise((resolve,reject)=>{
//     console.log("This is Executer")
//     // reject("Failure")
//     resolve("Successfull")
// })

// prm.catch((result)=>{
//     console.log("catch Block",result)
// return result
// })

// .then((result)=>{
// console.log ("then Block",result)
// })


// let prm=new Promise((resolve,reject)=>{
// console.log('Executor Func....')
// setTimeout(()=>{
//     console.log("fetching Profile")
//    reject()
// },2000)

// })

// prm.then(()=>{
//     console.log("state is Fullfilled / Data  Fetched successfull...😁")
// })
// .catch(()=>{
//     console.log("state is Unfullfilled / Data Fetching unsuccesfull...😢")
// })


// let prm = new Promise((resolve, reject) => {
//     console.log("Water Boiling...")
//     setTimeout(() => {
//         console.log("Water has Started to boiling")
//         // reject();
//         resolve()

//     },3000)
// })

// prm
// .then(()=>{
//     console.log("Water Boiled Successfully..... / fullfiled")
// })
// .catch(()=>{
// console.log("water boiling unsuccessful..... / unfullfilled ")
// })


// function loginPage(){
//     return new Promise((resolve,reject)=>{
//         console.log("login here")
//         setTimeout(()=>{
//         console.log("login Successfull")    
//             resolve()
//         },4000)
//     })
// }
// function showCart(){
//     return new Promise((resolve,reject)=>{
//         console.log("Loading Carts Page")
//         setTimeout(()=>{
//             console.log("Showing Carts....")
//             resolve()
//         },3000)
//     })
// }
// function addToCart(){
//     return new Promise((resolve,reject)=>{
//         console.log("Add to cart")
//         setTimeout(()=>{
//             console.log("cart added successfully")
//             resolve()
//         },4000)
//     })
// }
// function payment(){
//     return new Promise((resolve,reject)=>{
//         console.log("payment")
//         setTimeout(()=>{
//             console.log("Payment Successfull")
//             reject()
//         },4000)
//     })
// }

// loginPage()
// .then(showCart)
// .then(addToCart)
// .then(payment)
// .catch(()=>{
//     console.log("Error Cant Fetch")
// })

