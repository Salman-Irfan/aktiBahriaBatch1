console.log(`in back ticks mei jo liken gy wo as it is browser console pe print ho jaye ga`)

let anyVariable = 123
console.log(anyVariable)

console.log(123)

console.log(123+10)


console.log(anyVariable+34) // variable name reused, not created

console.log(123 + 10 - 40)


let secondVariable = 56

console.log(anyVariable + secondVariable) // variable name reused, not created
console.log(anyVariable - secondVariable) // variable name reused, not created
console.log(anyVariable * secondVariable) // variable name reused, not created
console.log(anyVariable / secondVariable) // variable name reused, not created
console.log(anyVariable % secondVariable) // variable name reused, not created

// a bit more modifications
let variableNameTwo = 123

// rule 2
let number1 = 23 // number could be at last
let number1To10 = 1210 // number in between and at end also


let createdAtFirst = `mei pehli baar create hua`
console.log(createdAtFirst)

// let createdAtFirst = `dusri baar`
createdAtFirst = `dusri baar` // already created variable is reused
console.log(createdAtFirst)

let x = 12
x= 50

const pie = 3.14
// pie = 56
console.log(pie)


var useWithVar = 1233456
console.log(useWithVar)
var useWithVar = `something else`
useWithVar = `something else`
console.log(useWithVar)