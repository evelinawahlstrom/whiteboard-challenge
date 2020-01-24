/* TASK: Make this work (repeat 3 times the contents of an array)

1. Understand the challenge
    * Straightforward - console.log([]) the contents of an array 3 times

2. Reasoning about the challenge
    * Instead of writing a function that just does exact that - repeat 3 times, it's (according to me) always better to write a more general solution that can be applied with various times of repetition
    * The function repeat() should take two parameters, 
        - arr & repeats

3. Start coding
    * With comments
    * Test it with console.logs
        - Maybe even one that is going to be correct and another one returning false or similar.
*/

let repeat = (arr, repeats) => 
  Array.from({ length: repeats }, () => arr).flat();
  // The Array.from() function is an inbuilt function in JavaScript which creates a new array instance from a given array.
  // The .flat() creates a new array that concatenates all subarrays into one array
  console.log(repeat([1,2,3], 1))
  console.log(repeat([1,2,3], 2))
  console.log(repeat([1,2,3], 3))


  let repeat = (arr, repeats)