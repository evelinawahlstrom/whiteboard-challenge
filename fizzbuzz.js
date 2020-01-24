/*
1. Understand the challenge:
     The FizzBuzz challenge goes something like this. Write a function that does the following:

    * console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
    * logs fizz instead of the number for multiples of 3
    * logs buzz instead of the number for multiples of 5
    * logs fizzbuzz for numbers that are multiples of both 3 and 5
    *
2. Reasoning about the challenge:
    * A challenge resolving around different scenarios, where it gives different outcomes depending on if the nr is a nr that is multplied by 5 or 3
    * With the help of the modulus operator (%) you can check what the remainder is of nr(1) after division of another nr(2) and IF the remainder = 0 then it's an indication that nr(1) is a multple of nr(2)
3. Start coding
    * Make comments underneath some lines of code to show that you really understand it
    * Name the constant with self-explanatory names --> you're code is easily read. 
*/

const fizzBuzz = num => {
    for (let i = 1; i <= num; i++)
    // 1. check if the number is a multiple of both 3 & 5
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } 
    // 2. check if the number is a multiple of 3 
    else if(i % 3 === 0) {
        console.log("fizz")
    // 3. check if the number is a multiple of 5
    }
    else if(i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}

fizzBuzz(5)
// Output: 1, 2, fizz, 4, buzz

