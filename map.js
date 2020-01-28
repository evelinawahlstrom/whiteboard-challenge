/// Using the function you wrote for the previous assignment, write a function 
/// that takes an array of Dutch grades,
/// and returns an array of American grades.

function toAmericanGrade(grade) {
    console.log("WHAT IS GRADE", grade)

    if (grade >= 9 && grade <= 10) {
        return "A"
    } else if (grade >= 8 && grade <= 8.9) {
        return "B"
    } else if (grade >= 7 && grade <= 7.9) {
        return "C"
    } else if (grade >= 6 && grade <= 6.9) {
        return "D"
    } else if (grade >= 1 && grade <= 5.9) {
        return "F"
    }
}

function toAmericanGrades(grades) {
    console.log("WHAT ARE GRADES?", grades)
        // Asking yourself what it is? and console.log and see if you understand what datatype etc..
    const americanGrades = grades.map(toAmericanGrade)
    console.log("WHAT ARE AMERICANGRADES", americanGrades)
    return americanGrades
}
/// map method, will give us back a new array //
// test
const grades1 = [9, 5.5, 6, 7.3]
const res = toAmericanGrades(grades1)[3]
console.log(`last is C? ${'C' == res ? "yes" : `no: ${res}`}`)
