// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 5
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("fab");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("apr");
        break;

    default:
        console.log("default case match");
        break;
}


const userMail = "s@gmail.com"

if( userMail){
    // console.log("Got user email");
}
else{
    console.log("Don't have mail id");
}



// falsy values : false, 0, -0, BigInt 0n, null, undefined, NaN
// truthy value : above values ko chod ke same true value hai
// special cases: "0", 'false', " ", [], {}, function(){}

if(userMail.lenght === 0){
// console.log("Array is empty");
}
// else {console.log("hihi");}


// ========================================================================================
// Nullish Coalescing Operator (??): null underfined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);
// ===============================================================================================
//  Trinary operator

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");