let date=new Date()
console.log(date.toString());
console.log(date.toLocaleDateString());

console.log(typeof date);

let createdate=new Date(2024, 02, 03,23,4,4)
console.log(createdate.toDateString());
console.log(createdate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(createdate.getTime());



