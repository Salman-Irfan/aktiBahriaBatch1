console.log(`dom`)

console.log(document)

const headingOne = document.getElementsByTagName("h1")
console.log(headingOne)

const headingTwo = document.getElementById("two")
console.log(headingTwo)

let marks = 100
console.log(marks)

headingTwo.innerHTML = `
    <div>
        <h1>Ali Marks: ${marks}</h1>
    </div>
`

const outerDiv = document.getElementsByClassName("outerDiv")
console.log(outerDiv[0])

const queryHeadingId = document.querySelector("#two")
console.log(queryHeadingId)


const queryClass = document.querySelector(".outerDiv")
console.log(queryClass)

const queryClassAll = document.querySelectorAll(".outerDiv")
console.log(queryClassAll)

const queryAllId = document.querySelectorAll("#two")
console.log(queryAllId)