// fetch('https://something.com').then().catch().finally()
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // BD calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");

})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = 0
            if (!error) {
                resolve({username: "Shashi", password: "123"})
            } else{
                reject('ERROR: Something went wrong')
            }
        },1000)
})
promiseFour.then((user) =>{
     console.log(user);
     return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = 0
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else{
            reject('ERROR: Something went wrong in javascript')
        }
    },1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);

    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await response.json()
    console.log(data);      
    // console.log(response);
    } catch (error) {
        console.log("E: ", error);
    }
}
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()

})
.then((date)=>{
    console.log(data);
})
.catch((error)=> console.log(error))