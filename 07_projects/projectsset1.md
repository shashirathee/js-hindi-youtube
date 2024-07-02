




# Solution code

## project 1

```javascript
console.log("Shashi)
const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```


## project 2 solution

```javascript



const form = document.querySelector('form')
// this usecase will give you empty
//  const height =parseInt(document.querySelector('height').value)


form.addEventListener('submit',function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const bmi = (weight/ ((height*height)/10000)).toFixed(2)
    if(bmi<18.6)results.innerHTML = ` under wight - <span>${bmi}</span>`;
    else if(bmi<24.9)results.innerHTML = ` normal bmi - <span>${bmi}</span>`;
    else results.innerHTML = ` over wieght - <span>${bmi}</span>`;

    
  }
});

```

## project 3 solution code

```javascript

const clock =document.getElementById('clock')
//  Alternate 
// const clock = document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
},1000)


```

## project 4 solution

```javascript
const randomNumber =parseInt(Math.random()*10+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess =[]
let numguess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  // abc or -negative number not allowed  OR  jyada badi value na mile
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess <1){
    alert('Please enter a valid number greater then 1')

  }
  else if(guess >100){
    alert('Please enter a valid number less then 100')

  }
  else{
    prevGuess.push(guess)
    if(numguess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
if(guess === randomNumber){
  displayMessage(`You guessed it right`)
  endGame()
}
else if(guess< randomNumber){
  displayMessage(`Number is too low`)
}
else if(guess> randomNumber){
  displayMessage(`Number is too high`)
}
}

function displayGuess(guess){
userInput.value =''
guessSlot.innerHTML += `${guess} `
numguess++;
remaining.innerHTML =`${11-numguess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
  userInput.value =''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  StartOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame(){
  const newGameButton =document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100+1)
    prevGuess = []
    numguess =1
    guessSlot.innerHTML =``
    remaining.removeAttribute('disabled')
    startOver.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })

}
```



## project 5 solution
```javascript

console.log('Project 5');

window.addEventListener('keydown', (e) => {
  insert.innerHTML =`
  <div class ='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`
})

```


## project 6 solution 
```
// generat a random colour

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color ='#'
  for( let i =0; i< 6; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let intervalId
const startChangingColor = function(){

  if(!intervalId){
    intervalId =setInterval(changeBackgroundColour,1000)
  }

  function changeBackgroundColour(){
  document.body.style.backgroundColor = randomColor();

  }
}
const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null 
}

document.querySelector('#start').addEventListener
('click', startChangingColor)

document.querySelector('#stop').addEventListener
('click', stopChangingColor)



// console.log(Math.floor(Math.random()*16))
console.log();
```