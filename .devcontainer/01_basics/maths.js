const score=100;
console.log(score);

const  balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const othrNumber=123.8798
console.log(othrNumber.toPrecision(3));

const hund=100000
console.log(hund.toLocaleString('en-IN'));

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);