console.log(`set interval`)

const promotion = () =>{
    console.log(`show promotion message`)
}

setInterval(promotion, 3000)

const originalTitle = document.title
console.log(originalTitle)

const handleUserName = () => {
    document.title = "salman"
}
setInterval(handleUserName, 2000)

const displayOriginalTitle = () => {
    document.title = "Original Title"
}

setInterval(displayOriginalTitle, 3000)