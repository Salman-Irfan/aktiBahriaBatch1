console.log(`events`)

const firstName = document.getElementById('firstName')
const email = document.getElementById('email')
const password = document.getElementById('password')



const signUpForm = document.getElementById("signUpForm")

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(`form submitted`)
    const signUpFormData = {
        firstName: firstName.value,
        email: email.value,
        password: password.value,
    }
    console.log(signUpFormData)
})
