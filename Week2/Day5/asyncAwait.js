// /* let prm = new Promise((resolve, reject) => {
//     console.log("Executer has started")
//     setTimeout(() => {
//         console.log("State success");
//         resolve()
//     }, 3000)
// })


// // prm
// // .then(()=>{
// //     console.log("Success")
// // })
// // .catch(()=>{
// //     console.log("state Unfulfilled")
// // })
// // .finally(()=>{
// //     console.log("Promise completed")
// // })

// async function run() {
//     try {
//         await prm
//         console.log("Promise fulfilled")
//     } catch (err) {
//         console.log("Promise Failed")
//     }
// }
// run() */


// function step1() {
//     return new Promise((resolve, reject) => {
//         console.log("login here")
//         setTimeout(() => {
//             console.log("login Successfull")
//             resolve()
//         }, 4000)
//     })
// }
// function step2() {
//     return new Promise((resolve, reject) => {
//         console.log("Loading Carts Page")
//         setTimeout(() => {
//             console.log("Showing Carts....")
//             resolve()
//         }, 3000)
//     })
// }
// function step3() {
//     return new Promise((resolve, reject) => {
//         console.log("Add to cart")
//         setTimeout(() => {
//             console.log("cart adding failed")
//             reject()
//         }, 4000)
//     })
// }
// function step4() {
//     return new Promise((resolve, reject) => {
//         console.log("payment")
//         setTimeout(() => {
//             console.log("Payment success")
//             resolve()
//         }, 4000)
//     })
// }

// async function run() {
//     try {
//         await step1();
//         await step2();
//         await step3();
//         await step4();
//     }catch(e){
//         console.log('error occured ')
//     }
//     finally{
//         console.log("Execution completed")
//     }
// }
// run()



// const prm1 = new Promise((resolve, reject) => {
//     console.log("Login page")
//     setTimeout(() => {
//         reject('login done...')
//     }, 3000)
// })
// const prm2 = new Promise((resolve, reject) => {
//     console.log("Loading Profile")
//    setTimeout(() => {
//     console.log("Profile loaded")
//     resolve()
//    }, 3000);
// })

// const prm3 = new Promise((resolve, reject) => {
//     console.log("Loading Posts")
//     setTimeout(() => {
//         console.log("post Loaded")
//         resolve()
//     },
//         3000
//     )
// })
// const prm4 = new Promise((resolve, reject) => {
//     console.log("Loading comments")
//     setTimeout(() => {
//         console.log("commentss Loaded")
//         resolve()
//     }, 3000)
// })

// prm1
// .then(()=>prm2)
// .then(()=>prm3)
// .then(()=>prm4)

// .catch((err)=>{
//     console.log(err.message)
// })

// async function run() {
//     try {
//         await prm1
//         await prm2
//         await prm3
//         await prm4

//     } catch (err) {
//         console.log(err.message)
//     }
// }
// run()
function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done!"), 2000);
  });
}

async function test() {
  console.log("Start");
  let result = await delay();
  console.log(result);
  console.log("End");
}

test();