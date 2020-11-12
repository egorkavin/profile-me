const form = document.querySelector('form')
const fname = form.querySelector('#fname')
const fnameLabel = form.querySelector('label[for="fname"]')
const isValid = str => str.match(/^[A-Za-z]+$/)
form.addEventListener('submit', (e) => {
    if (fname.value.split(' ').length === 3 && fname.value.split(' ').every(isValid)) {
        fnameLabel.classList.remove('invalid')
    } else {
        fnameLabel.classList.add('invalid')
        e.preventDefault()
    }
})

const passwordInput = document.getElementById('password')
const toggleBasswordButton = document.getElementById('toggle-password')
toggleBasswordButton.addEventListener('click', togglePassword)
function togglePassword() {
    if (passwordInput.type === 'password') {
        toggleBasswordButton.textContent = 'hide'
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password'
        toggleBasswordButton.textContent = 'show'
    }
}