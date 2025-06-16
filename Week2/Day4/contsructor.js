/* function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
      return("Hai my name is "+this.name)
    }
}
let Person1= new Person("Rinshad",21)
let Person2= new Person("Arsha",21)



console.log(Person1.greet())
console.log(Person2.greet()) */



class User {
  constructor(name) {
    this.name = name;
  }
}

const arsha = new User("Arsha");
const Rinshad = new User("Rinshad");
console.log(arsha); 
console.log(Rinshad); 
