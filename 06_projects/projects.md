# Projects related to DOM

## project link 
[click] ( https://stackblitz.com/edit/dom-project-chaiaurcode-iffvgp?file=index.html)

```
html file code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```
CSS

html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}

```

```


 ```
  javascript code for color changer

  const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id==='grey'){
       body.style.backgroundColor=e.target.id
     }
     if(e.target.id==='white'){
       body.style.backgroundColor=e.target.id
     }
     if(e.target.id==='yellow'){
       body.style.backgroundColor=e.target.id
     }
     if(e.target.id==='blue'){
       body.style.backgroundColor=e.target.id
     }
  })
});
 ```

 ```
 BMI Calculator js code
 
 const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height =parseInt(document.querySelector('#height').value)
  const weight =parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')

  if(height ==='' || height<0 || isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`; 
  }else if(weight ==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`; 
  }else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)
   results.innerHTML=`<span>${bmi}</span>`
  }
  

})
 ```
 ```
 GUESS THE NUMBER

 let randomnumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
 submit.addEventListener('click',function(e){
   e.preventDefault()
   const guess=parseInt(userInput.value)
   validateGuess(guess);
 })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert('please enter a valid number')
}else if(guess<1){
  alert('please enter a  number greater than 1')
} else if(guess>100){
  alert('please enter a  number less than 100')
} else{
  prevGuess.push(guess)
  if(numGuess===11){
    displayGuess(guess)
    displayMessage(`game over.random number was${randomnumber}`)
    endGame()

  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
  if(guess===randomnumber){
    displayMessage(`you guessed it right`)
    endGame()

  }else if(guess<randomnumber){
    displayMessage(`number is too low`)
  }else if(guess>randomnumber){
    displayMessage(`number is too high`)
  }
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML+=`${guess} `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
  loworHi.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame=false;
  newGame();
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
randomnumber=parseInt(Math.random()*100+1);
prevGuess=[];
numGuess=1;
guessSlot.innerHTML='';
remaining.innerHTML=`${11-numGuess} `;
userInput.removeAttribute('disabled')
startOver.removeChild(p);
  playgame=true;
});
}
 ```
```
keyboard js code
const insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `;
})

```
```
random color js code

//generate random color
const randomcolor=function(){
  const hex="0123456789ABCDEF";
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;

};
let intervalid;
const startchangingcolor=function(){
 intervalid= setInterval(changebgcolor,1000)
 function changebgcolor(){
  document.body.style.backgroundColor=randomcolor();
 }
};
const stopchangingcolor=function(){
clearInterval(intervalid);
intervalid =null;
};
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);
```
