// const people = ['David', 'Kelley', 'Jeroen']

// for (let index = 0; index < people.length; index++) {
//     const person = people[index];
//     console.log(`hi ${person}`)
//     console.log(people.length)
//     // people.length give an output of 3, but because index of an array starts counting at 0, we want to iterate as long as index is less than 3 --> 0,1,2 giving the following output:
//         // hi David
//         // hi Kelley
//         // hi Jeroen
// }


// Alt. use the higher-order-function .forEach() that will return for each element --> hence we don't need to specifiy when it needs to stop (index < people.length) as above in the for loop.

const people = ['David', 'Kelley', 'Jeroen']

function sayHi(person){
    console.log(`hi ${person}`)
}

people.forEach(sayHi)
// .forEach calls sayHi with each element of the array as an argument.

// under the hood:
// sayHi('David')
// sayHi('Kelley')
// sayHi('Jeroen')

// output:
// hi David
// hi Kelley
// hi Jeroen