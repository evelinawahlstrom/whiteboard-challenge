// A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two. For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

/*
1. Understand the challenge:
    The Fibonacci challenge goes something like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.

Example:

fibonacci(3)  // --> 2

2. Reasoning about the challenge:
    The Fibonacci challenge involves iterating over the number of times indicated by the function’s argument and returning the entry in the Fibonacci series that you find in that position.

This way of stating the challenge immediately points to an iterative approach to solve the problem.
 
3. Start coding
    * Make comments underneath some lines of code to show that you really understand it
    * Name the constant with self-explanatory names --> you're code is easily read. 
*/

const fibonacci = num => {
    // store the Fibonacci sequence you're going
    // to generate inside an array and
    // initialize the array with the first two
    // numbers of the sequence
    const result = [0, 1]
    // The reason why the result array above already contains the first two numbers in the series is because each entry in the Fibonacci series is made of the sum of the two preceding numbers. At the very beginning of the series there are no two numbers that you can add to produce the next number, so your loop could not possibly generate them automatically. However, you know the first two numbers are always 0 and 1, so you manually initialize your result array with those two numbers.
  
    for(let i = 2; i <= num; i++) {
      // push the sum of the two numbers
      // preceding the position of i in the result array
      // at the end of the result array
      const prevNum1 = result[i - 1]
      const prevNum2 = result[i - 2]
      result.push(prevNum1 + prevNum2)
    }
    // return the last value in the result array
    return result[num]
  }

  console.log(fibonacci(9))