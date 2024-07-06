// let myName = "Shashi.  "
// let myChai = "Chai   "

// console.log(
//     myName.truelength
// );

let myHeros =["Shashi","Harish"]


let heroPower={
    shashi: "hammer",
    harish: "bank",

    getHarishPower: function(){
        console.log(`Harish pwer is ${this.harish}`);
    }
}

Object.prototype.harish =function(){
    console.log(`harish is present in all objects`);
}
Object.prototype.shashi =function(){
    console.log(`delete all`);
}

Array.prototype.heyShashi = function(){
    console.log(`Shashi say hello`);
}

// heroPower.harish()
// myHeros.harish()
// myHeros.shashi()
// heroPower.heyShashi()



//inheritance

const User={
name:"Chai",
email: "shshshsh@gmail.com"
}


const TASupport={
makeMakeASsignment:false,
fullTime: true,
// __proto__:TASupport
}


const TeacherLab={
makeVideo:true
}


TeacherLab.__proto__= User

// moder syntax
// Object.setPrototypeOf(TASupport, TeacherLab)
let anotherUserName = "ChaiAurcode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);

}

anotherUserName.trueLength()
"Shashi.  ".trueLength()
"harish".trueLength()