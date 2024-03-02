// objects.create
const mysym=Symbol("key2");

const JsUser={
    name:"pasha",
    age:20,
    [mysym]:"mykey1",
    location: "Moradabad",
    email:"gulrez@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thursday"]
}
console.log(JsUser["email"]);
console.log(JsUser[mysym]);

JsUser.email="pasha@google.com";
// Object.freeze(JsUser); chnge nhi kr skte
JsUser.email="turk@google.com";
console.log(JsUser);


JsUser.greeting=function(){
    console.log("hello Js user");
}
JsUser.greeting2=function(){
    console.log(`hello Js user,${this.location}`);
}
 console.log(JsUser.greeting());
 console.log(JsUser.greeting2());
