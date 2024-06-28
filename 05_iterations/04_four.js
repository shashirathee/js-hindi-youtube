
const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog =["js", "rb", "py", "java", "cpp"]

for (const key in prog) {
    console.log([key]);
}