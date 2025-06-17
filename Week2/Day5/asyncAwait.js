/* let prm = new Promise((resolve, reject) => {
    console.log("Executer has started")
    setTimeout(() => {
        console.log("State success");
        resolve()
    }, 3000)
})


// prm
// .then(()=>{
//     console.log("Success")
// })
// .catch(()=>{
//     console.log("state Unfulfilled")
// })
// .finally(()=>{
//     console.log("Promise completed")
// })

async function run() {
    try {
        await prm
        console.log("Promise fulfilled")
    } catch (err) {
        console.log("Promise Failed")
    }
}
run() */


function step1() {
    return new Promise((resolve, reject) => {
        console.log("login here")
        setTimeout(() => {
            console.log("login Successfull")
            resolve()
        }, 4000)
    })
}
function step2() {
    return new Promise((resolve, reject) => {
        console.log("Loading Carts Page")
        setTimeout(() => {
            console.log("Showing Carts....")
            resolve()
        }, 3000)
    })
}
function step3() {
    return new Promise((resolve, reject) => {
        console.log("Add to cart")
        setTimeout(() => {
            console.log("cart adding failed")
            reject()
        }, 4000)
    })
}
function step4() {
    return new Promise((resolve, reject) => {
        console.log("payment")
        setTimeout(() => {
            console.log("Payment success")
            resolve()
        }, 4000)
    })
}

async function run() {
    try {
        await step1();
        await step2();
        await step3();
        await step4();
    }catch(e){
        console.log('error occured ')
    }
    finally{
        console.log("Execution completed")
    }
}
run()
