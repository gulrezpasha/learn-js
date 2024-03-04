 const userloggedIn=true;
 const debitcard=true;

 if(userloggedIn && debitcard && 2==2){
    console.log("allow user to buy");
 }

 const emptyobj= {}
 if(Object.keys(emptyobj).length===0){
    console.log("obj is empty");
 }

 let val1;
//  val1=5 ?? 12
//  val1=null?? 12
 val1=undefined?? 12
 console.log(val1);