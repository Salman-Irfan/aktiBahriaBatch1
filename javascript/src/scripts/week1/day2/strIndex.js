console.log(`str indexing`)


let str = `sal man `

console.log(str)

console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])
console.log(str[5])
console.log(str[6])


let nameLength = str.length
console.log(nameLength)

for (let i = 0; i < nameLength; i++) {
    console.log(i)
    console.log(str[i])
    // how to detect space

    if (str[i] == " " ) {
        console.log(`space character is founded at ${i}`)
        // console.log("space character is founded at" + " " + i + "")
    } else {
        console.log(`no space character found`)
    }
    // k kia exactly last character pe space ai hai ya nhi, 10 min khud sochna, pir ap ne chat gpt se puchna hai
}

const mainContent = document.getElementById('mainContent')
console.log(mainContent)
mainContent.innerHTML = `
    <div>
        <h1>JS took pover the HTML content via DOM Manipulation</h1>
    </div>
`

