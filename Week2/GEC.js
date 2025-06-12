// var number = 2;
// function Square (n) {
//     var res = n * n;
//     return res;
// }
// var newNumber = Square(3);
// console.log(newNumber)

function outer() {
    var a = 100;
    function inner() {
        console.log(a)
       
    }
     return inner()
}
outer()