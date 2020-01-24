// 1. Normal function

function sayHi() {
    return "Hello World!"
}

// 2. Arrow function
const findLength = str => {
    // findConstants is the function that needs to be called (!)
    // str is the parameter
    let string = str
        return string.length
}


console.log(sayHi())
console.log(findLength("hello"))