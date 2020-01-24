/*
1. Understand the challenge:
    Writing a function that checks a string after vowels (a, e, i, o, u) and return the number of vowels in that string so for example: 

    findVowels('hello') // 2
    findVowels('car') // 1
    
2. Reasoning about the challenge:
    * Using a regex for the vowels and setting that as a constant = matched
    * Then whether or not a string contains any vowels, the length of matched is return, else 0
    
3. Start coding
    * Make comments underneath some lines of code to show that you really understand it
    * Name the constant with self-explanatory names --> you're code is easily read. 
*/

const findVowels = str => {
    const matched = str.match(/[aeiou]/gi)
    // /[aeiou]/gi, this is the regex for all the vowels, and gi, where g = global, match all instances of the pattern in a string,where i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
    return matched ? matched.length : 0
  }

  console.log(findVowels("hello"))

