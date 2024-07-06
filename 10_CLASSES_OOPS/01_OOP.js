const user ={
    username: "Shashi",
    login: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.getUserDetails());
// console.log(this);



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this 

}
const userOne = new User("Shashi", 12, true)
const userTwo = new User("Harish", 11, false)
console.log(userTwo.constructor);