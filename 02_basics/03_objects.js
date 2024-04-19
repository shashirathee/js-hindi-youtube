// singleton

//  object literals

const mySum = Symbol("key1")

const JsUser ={
    name: "Shashi",
    age: 18,
    [mySum]: "mykey1",
    location: "Jaipur",
    email: "shashirathee62682@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])


JsUser.email ="hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email= "hitesh@chatgpthihi.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());