console.log(`arrow func`)

let aliMarks = [88, 95, 97]
let totalMarks = 300


const calculateAverage = (studentMarks, totalMarks) => {
    console.log(studentMarks)
    let sum = 0

    for (let i = 0; i < studentMarks.length; i++) {
        sum += studentMarks[i];
    }

    return (sum / totalMarks) * 100
}


const aliPercentage = calculateAverage(aliMarks, totalMarks)
console.log(aliPercentage)

const hanzalaPercentage = calculateAverage([40, 50, 60], totalMarks)
console.log(hanzalaPercentage)

const ahmadPercentage = calculateAverage([60, 65, 78], totalMarks)
console.log(ahmadPercentage)

console.log(typeof (calculateAverage))