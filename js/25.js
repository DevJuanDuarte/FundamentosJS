//DOM: submits

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit' , e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre')
    const password = document.querySelector('.password').value

    if (nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios');
    } else {
        console.log(nombre.value);
        console.log(password);
        console.log('Enviado correctamente');
    }
    
})