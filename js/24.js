// DOM: Inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', function (e) {
    console.log(e.target.value);
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', delayPass)

function delayPass() {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 200);
}