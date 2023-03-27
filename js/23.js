//Eventos con el DOM:


//click:
const heading = document.querySelector('.heading')
heading.addEventListener('click', function () {
    heading.textContent = 'Nuevo Heading'
})