console.log(`function file`)

// ali data
let aliMathMarks = 90
let aliPhyMarks = 80
let aliCheMarks = 70

let totalSubjects = 3

let aliAverageMarks = (aliMathMarks + aliPhyMarks + aliCheMarks) / totalSubjects
console.log(aliAverageMarks)

// ahmad data
let ahmadMathMarks = 95
let ahmadPhyMarks = 85
let ahmadCheMarks = 72

let ahmadAverageMarks = (ahmadCheMarks + ahmadMathMarks + ahmadPhyMarks) / totalSubjects
console.log(ahmadAverageMarks)

console.log(calulateAverageMarks) //  (let / const) var wala masla, line se pehle e accessible hai

function calulateAverageMarks(mathMarks, phyMarks, cheMarks, totalSubjects) {
    return (mathMarks + phyMarks + cheMarks) / totalSubjects
}

const aliAvgMarksByFunc = calulateAverageMarks(aliMathMarks, aliPhyMarks, aliCheMarks, totalSubjects)
console.log(aliAvgMarksByFunc)

const ahmadAvgMarksByFunc = calulateAverageMarks(ahmadMathMarks, ahmadPhyMarks, ahmadCheMarks, totalSubjects)
console.log(aliAvgMarksByFunc)

const hanzalaAvgMarks = calulateAverageMarks(99, 88, 34, 3)
console.log(hanzalaAvgMarks)

const ahmadTwo = calulateAverageMarks(96, 88, 75, 3)
console.log(ahmadTwo)