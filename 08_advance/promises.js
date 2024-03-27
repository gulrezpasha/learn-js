const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
console.log('task is cmplt');
resolve()
    },1000)
   
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task 2");
        resolve()

    },1000)
}).then(function(){
console.log("Async 2 consumed");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
   resolve({username: "pasha", email: "pasha@google.com"})
    },1000)
})
promiseThree.then(function(user){
console.log(user);
})

const promiseFour=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "pasha", password: "12345"})
        } else{
            reject('ERROR : Something went wrong')
        }
    },1000)

})
promiseFour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error){
console.log(error);
}).finally(()=>{
    console.log(("The promise is either resolved or rejected"));
})

const promiseFive=new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "honey", password: "12345"})
        } else{
            reject('ERROR : js went wrong')
        }
    },1000)
});

async function consumePromisefive(){
   try {
    const response= await promiseFive
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromisefive();

// async function getAllUsers(){
//  try {
//     const response=   await fetch('https://jsonplaceholder.typicode.com/users')
//  const data= await response.json()
//  console.log(data);
//  } catch (error) {
//     console.log("E:",error);
//  }
// }
//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


