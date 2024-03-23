console.log(`promises`)


const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1") // http request

console.log(response.data)

let programStatus = null

if(response.data.completed === false){
    programStatus = `program to warr gya`
}

const apiData = document.getElementById("apiData")
console.log(apiData)
apiData.innerHTML = `
    Id: ${response.data.id} <br/>
    userId: ${response.data.userId} <br/>
    Title: ${response.data.title} <br/>
    Completed: ${programStatus} <br/>
`