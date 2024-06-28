const user ={
    username: "shashi",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to webiste`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "shashi"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "shashi"
//     console.log(this.username);
// }

// chai()
const chai =  () =>  {
    let username = "shashi"
    console.log(this);
}

// chai()

// () => {}

// const addTwo = (num1, num2 ) => {
//     return num1 + num2
// }

const addTwo = (num1, num2 ) => 
    ( num1 + num2)

console.log(addTwo(3,4));

// const myArray = [1,2,3,4,5]

// myArray.forEach(() => )