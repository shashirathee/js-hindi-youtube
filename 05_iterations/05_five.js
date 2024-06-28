const coding = ["js", "ruby", "cpp", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item, index, arr){
//     console.log(item, index, arr);
// }
// coding.forEach(printMe)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) =>{

    console.log(item.languageName);
}
)