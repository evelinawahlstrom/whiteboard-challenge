/*
1. Understand the challenge:
    * Palindrome = word that reads the same way backward as forward:

    - palindrome('anna') === true
    - palindrome('car) === false

2. Reasoning about the challenge:
    * A challenge resolving around a string that should be reversed and when returned it should either return true if palindrom or false if != palindrom. 

3. Start coding
    * Make comments underneath some lines of code to show that you really understand it
    * Name the constant with self-explanatory names --> you're code is easily read. 
*/

const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparisong
    return str === str.split('').reverse().join('')
  }

  console.log(palindrome("anna"))
  console.log(palindrome("hello"))