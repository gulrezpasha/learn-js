const id=Symbol('123');

const anotherId=Symbol('123');

console.log(id===anotherId);

const star=["pasha","Mughal"];
let myObj={
    name: "turk",
    age: 21,
}
const myFunction = function(){ // here we declare function as a variable 
    console.log("less go");
}
console.log(typeof id);

let name= "pasha"; // stack store copy value and heap store original value
let anothername = name;
anothername= "Turk"
console.log(name);
console.log(anothername);

let user1={
    email:"pasha@google.com"

}
userTwo=user1;
 userTwo.email="Turk@google.com";

 console.log(user1.email);
 console.log(userTwo.email);

 let user2={
    email:"turk@google.com"
 }

 user3=user2;
 user2.email="Mugal@google.com";
 console.log(user2.email);
 console.log(user3.email);





