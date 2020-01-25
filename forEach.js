const people = [
    { firstName: 'David', lastName: 'Stephenson' },
    { firstName: 'Rembert', lastName: 'Boom' },
    { firstName: 'Wouter', lastName: 'de Vos' },
]

function greet(person){
    console.log(`Hello ${person.firstName} ${person.lastName}! What a fine day today!`)

    // desired output for 1 person:
    // Hello David Stephenson! What a fine day today!
}

function politeGreet(person) {
    console.log(`Good day mr ${person.lastName}`)
}

people.forEach(greet)
people.forEach(politeGreet)