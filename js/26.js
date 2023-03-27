//Generando código HTML con Javascript

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit' , e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre')
    const password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia) {
        alertaPrevia.remove()
    }
    //Creando elemento:
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')


    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Enviado correctamente'
        alerta.classList.add('exito')
    }
    // console.log(alerta);
    formulario.appendChild(alerta)

})