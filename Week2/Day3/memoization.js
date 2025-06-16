// const memo = {};

const { memo } = require("react");

// function square(n) {
//   if (n in memo) {
//     console.log("Returning from cache...");
//     return memo[n];
//   }

//   console.log("Calculating...");
//   memo[n] = n * n;  // Save the result
//   return memo[n];
// }


// const cache={};

// function square(num){
//     if(num in cache){
//         console.log('returning from cache.....');
//         return cache[num]
//     }else{
//         console.log("New Calculation....");
//         cache[num]=num*num
//         return cache[num]
//     }
// }console.log(
// square(5))


const cache = {}
function sqr(n) {
    if (n in cache) {
        console.log("Returning From cache");
        return cache[n]
    } else {
        console.log("Returning new calculation")
        cache[n] = n * n;
        return cache[n]
    }

}
console.log(sqr(10))
console.log(sqr(10))