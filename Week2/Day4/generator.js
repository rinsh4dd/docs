// function* greet(){
//     yield "hello";
//     yield"Rinshad";
//     yield"How are you";
    
// }
// const greeter=greet()
// console.log(greeter.next())
// console.log(greeter.next())
// console.log(greeter.next())



function* funcGen(){
    let i=1;
    while(i<=5){
        yield i;
        i++
    }
}

const gen=funcGen();

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())

console.log(gen.next())