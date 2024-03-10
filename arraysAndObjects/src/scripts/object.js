// every thing can be an object

let student = {
    name: 'salman',
    age: 25,
    address: "lahore",
    isSleeping: true,
    email: "salman@gmail.com",
}

console.log(student)
console.log(`dot vs bracket notation`)
console.log(student.name)
console.log(student["name"])
console.log(student.age)
console.log(student.address)
console.log(student.isSleeping)

if(student.isSleeping){
    console.log(`salman is sleeping`)
}else{
    console.log(`salman in sleeping`)
}

let studentKeys = Object.keys(student)
console.log(studentKeys)

for(let i in studentKeys){
    console.log(i) // important is only getting the first console result / value / output
    console.log(studentKeys[i])
    console.log(student[studentKeys[i]]) // student.email for the last iteration
}
