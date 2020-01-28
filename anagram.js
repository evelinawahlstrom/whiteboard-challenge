/*
1. Understand the challenge:
    * Writing a function that check whether or not two strings are anagrams of each other - aka whether or not they contain the exact same letters

    anagram('hello', 'elloh') === true
    anagram ('boy', 'car') === false

2. Reasoning about the challenge:
    * Here it is important to look at each letter, no punctation or anything else
    * Good to turn it to lowerString() for easier comparison

3. Start coding
    * Make comments underneath some lines of code to show that you really understand it
    * Name the constant with self-explanatory names --> you're code is easily read. 
*/

// helper function that builds the
// object to store the data
const buildCharObject = str => {
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
      // if the object has already a key value pair
      // equal to the value being looped over,
      // increase the value by 1, otherwise add
      // the letter being looped over as key and 1 as its value
      charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
  }
  
  // main function
  const anagram = (strA, strB) => {
    // build the object that holds strA data
    const aCharObject = buildCharObject(strA)
    // build the object that holds strB data
    const bCharObject = buildCharObject(strB)
  
    // compare number of keys in the two objects
    // (anagrams must have the same number of letters)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false
    }
    // if both objects have the same number of keys
    // we can be sure that at least both strings
    // have the same number of characters
    // Now we can compare the two objects to see if both
    // have the same letters in the same amount
    for(let char in aCharObject) {
      if(aCharObject[char] !== bCharObject[char]) {
        return false
      }
    }
    // if both the above checks succeed,
    // you have an anagram: return true
    return true
  }