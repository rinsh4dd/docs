// let arr = [];
// for(let i = 5; i > 1; i++){
//     arr.push(i-1)           // Warning! do not try this at home )
/* // }
// // console.log(arr)

function memoryLeakExample() {
    let largeData = new Array(1000000).fill("🔥"); // 1 million items

    return function innerFunction() {
        console.log("Doing something...");
        // We are not even using largeData here, but it's still trapped!
    };
} */

// const leaked = memoryLeakExample();
// Now 'largeData' is still in memory even though we don’t need it anymore

// function memoryLeak() {
//     let largeData = new Array(1000000).fill("🤎");

//     return function innerFunction() {
//         console.log("Doing something...");
//     };
// }
// const leaked = memoryLeak()
// console.log(leaked())

