const subscription = document.getElementById('subscription')


const anyOtherFunction = () => {
    console.log(`set time out function get called`)
    subscription.style = 'block'
}

setTimeout(anyOtherFunction, 3000)




console.log(`set time out`)

const popUp = document.getElementById('popUp')

const displayPopUp = () => {
    popUp.style = 'block'
}

setTimeout(displayPopUp, 2000)

const hidePopUp = () => {
    popUp.style.display = 'none'
}

setTimeout(hidePopUp, 5000)