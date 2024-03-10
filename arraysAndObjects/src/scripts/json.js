let student = {
    name: 'salman',
    age: 25,
    address: "lahore",
    isSleeping: true,
    email: "salman@gmail.com",
    oldWayWas: [100, 90, 80],
    studentMarks: [
        {
            subjectName: "math",
            subjectMarks: 100,
            isass: true
        },
        {
            subjectName: "phy",
            subjectMarks: 90,
            isPass: true
        },
        {
            subjectName: "che",
            subjectMarks: 28,
            isPass: false
        },
    ]
}

console.log(student)
console.log(student.studentMarks)
console.log(student.studentMarks[0])
// assignment is instead of using 0,1,2 at this point, use for loop, and and console wheter the student got passed, or failed
console.log(student.studentMarks[0].subjectName)
console.log(student.studentMarks[0].subjectMarks)
console.log(student.studentMarks[0].isPass)
console.log(student.studentMarks[1].subjectName)
console.log(student.studentMarks[1].subjectMarks)
console.log(student.studentMarks[1].isPass)
console.log(student.studentMarks[2].subjectName)
console.log(student.studentMarks[2].subjectMarks)
console.log(student.studentMarks[2].isPass)
