// The most common example of reduce usage is calculating a sum.

const initialValue = 0
const values = [3, 5, 1, 4, 2]

const total = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue)

console.log(total)

function toAmericanGrade(grade) {
    if (grade >= 9) {
        return 'A'
    }
    if (grade >= 8) {
        return 'B'
    }
    if (grade >= 7) {
        return 'C'
    }
    if (grade >= 6) {
        return 'D'
    }
    return 'F'
}

// We've seen how to use reduce to calculate a sum. Since the average is the sum divided by the number of items, we can do the following:
function averageAmericanGrade(grades) {
    return toAmericanGrade(grades.reduce((sum, value) => sum + value, 0) / grades.length)
}