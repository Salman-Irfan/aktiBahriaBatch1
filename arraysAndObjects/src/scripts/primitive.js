console.log(`primitive data type`)


let abc = 123
console.log(`value of abc = ${abc}`)

let secondVariable = abc
console.log(`value of secondVariable = ${secondVariable}`)


secondVariable = 456
console.log(`secondVariable value changed to = ${secondVariable}`)

console.log(`but still abc value didn't changed : ${abc}`) // 123 original

// array

let firstArray = [1,2,3,4,5]
console.log(`first array`)
console.log(firstArray) // [1,2,3,4,5]

let secondArray = firstArray
console.log(secondArray) // [1,2,3,4,5]


secondArray[0] = "kuch ajeeb c cheez"
console.log(secondArray)

// test that whether firstArray gotta changed? by directly changing the index of second array?
console.log(`first array after`)
console.log(firstArray) // 1st array, original data change ho rha tha, copied data mei change krny se


// refernce data ko clone ya copy kese kia jaye, jis se asli data mei change na ho?

let thirdArray = [1,2,3]
console.log(thirdArray)

// let forthArray = ["ham is k start mei b kuch add kr skty hain",...thirdArray, "kuch naya data"]

let forthArray = [...thirdArray] // urdu bazar se photo copy
console.log(forthArray)

forthArray[0] = "koi ajeeb c cheez"
console.log(forthArray)
console.log(thirdArray)  


let firstObj = {
    name: "humaira"
}

let secondObj = {...firstObj}

secondObj.name = 'fatima'

console.log(secondObj)
console.log(firstObj)