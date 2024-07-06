class User {
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }

    createId(){
        return `123`
    }
}

const hihi = new User("hihi")
//console.log(hihi.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "i@iphone@gmail.com")
console.log(iphone.createId());