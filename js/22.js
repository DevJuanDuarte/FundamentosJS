//DOM:

//querySelector
const heading = document.querySelector('.heading')
heading.textContent = 'Nuevo Heading'
console.log(heading.textContent);
// console.log(heading);
// console.log(heading.textContent);
// console.log(heading.classList);
// console.log(heading.id);
// console.log(heading.tagName);

//querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a')
// console.log(enlaces)
const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach (enlace => enlace.textContent = 'Nuevo Enlace')
