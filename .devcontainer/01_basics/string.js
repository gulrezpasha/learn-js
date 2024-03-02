const name="pasha"
const repocount=67
// console.log(name + repocount +"value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName= new String("pasha")
console.log(gameName[0]);

console.log(gameName.__proto__); // it will tell us about the type of string like its a object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const url="https:/pasha.com/pasha%27turk"
console.log(url.replace('%27', '-'))