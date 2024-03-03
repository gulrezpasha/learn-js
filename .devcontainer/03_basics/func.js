 function add2nos(no1,no2){
    let result=no1+no2
    return result;

 }
 const result=add2nos(3,6)
  console.log("Result:",result);

  function login(username){
    return `${username} just logged in`
  }
  console.log(login("pasha"));

  const user={
    username:"pasha",
    price:200
  }
  function handleObject(anyobj){
   console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
  }
  handleObject(user);

  const myArray=[200,400,600,700]

  function returnSecondvalue(getarray){
return getarray[3]
  }
  console.log(returnSecondvalue(myArray));