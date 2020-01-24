/* TASK: Remove vowels from a given string, and return the newly formed string with all lowerCase letters except the first one. 

1. Understand the challenge
    * console.log('str'), to a new string where all the vowels are gone and all characters are lowerCase except the first one. 

2. Reasoning about the challenge
    * 1. Define the vowels
    * 2. Write a function that first split the str using .split(), to test each letter on its one
    * 3. Use the array function .reduce to turn the given array into a reduced (single) value = single string, which joins all the character together to a string
    * 4. If statement that checks:
         a) it should check if it is a vowel and in that case just return empty
         b) if first character is a space, then just return output
         c) if the output.length === 0 then return it to upperCase
         d) ELSE return the output + character.toLowerCase()

3. Start coding
    * With comments
    * Test it with console.logs
        - Maybe even one that is going to be correct and another one returning false or similar.
*/

const isVowel = /[aeiouyAEIOUY]/

function reformat(string) {
    let characterArray = string.split("")
    return characterArray.reduce((output, character) => {
        // take out vowels
        if (isVowel.test(character)) {
            return output
        }

        // if first character is a space
        if(output.length === 0 && character === " "){
            return output
        }
        
        // first character, needs to be uppercase
        if(output.length === 0){
            return character.toUpperCase()
        }

        // not a vowel, and not the first character, turn into lowercase
        return output + character.toLowerCase()
    }, "") 
}

console.log(reformat("helLo Gorgeous"))
console.log(reformat("hllo gorG"))
console.log(reformat("Hll Grgs"))
console.log(reformat(" heLLO GORGEOUS"))
