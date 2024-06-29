




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