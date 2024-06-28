
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");    
}

// sayMyName()

function addTwoNumberrs(number1, number2)
{
    console.log(number1+ number2);
}
addTwoNumberrs(3,4)
function addTwoNumbers(number1, number2)
{
    // console.log(number1+ number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("shashi");
}

// addTwoNumbers(3,null)
const result = addTwoNumbers(3,5)
// console.log("Result:", result);

function loginUserMessage(username="ghost"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just loged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
    return num1

}

// console.log(calculateCartPrice(200, 400, 5500));
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

 const myNewArray = [200, 400, 600, 800]

 function returnSecondValue(getArray) {
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 400, 600, 800]));