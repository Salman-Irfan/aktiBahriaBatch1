console.log(`array`)

let studentMarks = [90, 100, 80, 75, 89]


console.log(studentMarks)

// let mathsMarks = studentMarks[0]
// console.log(mathsMarks)


// for i in is short hand of traditional for loop
for (let i in studentMarks) {
    console.log(`value of i is : ${i}`)
    console.log(studentMarks[i])
    // if else
    if (studentMarks[i] >= 90) {
        console.log(`student got A+ in subject : ${i}`)
    } else {
        console.log(`lesser than A+`)
    }
}


for (let i = 0; i < studentMarks.length; i++) {
    console.log(`value of i is : ${i}`)
    console.log(studentMarks[i])
    if (studentMarks[i] >= 90) {
        console.log(`you got a+ in this subject: ${i} `)
    } else {
        console.log(`lesser than a+`)
    }
}

studentMarks.push(86)
console.log(`after push operation`)
console.log(studentMarks)

// start se kuch nikalna hai

let anotherArray = [1, 2, 3, 4, 5, 88]
console.log(anotherArray)
const mujhyQNikala = anotherArray.pop()
console.log(anotherArray)
console.log(mujhyQNikala)

console.log(`shift and unshift array methods`)
anotherArray.shift() // nikly ga start se
console.log(anotherArray)

anotherArray.unshift(42) // 42 aye ga array k start mei
console.log(anotherArray)