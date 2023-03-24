const tecnologias = ['HTML' , 'CSS', 'Javascript' , 'React' , 'NodeJS']
// tecnologias.push("Vue.js") - Agrega un valor al final del arreglo
// tecnologias.unshift("Hola") - Agrega un valor al principio del arreglo
// tecnologias.pop() - Elimina el valor del final
// tecnologias.shift() - Elimina el valor del inicio
// tecnologias.splice(2,1) - Elimina un valor en especifico


//Agregar elementos a un array: es mejor este metodo que push ya que no modifica el arreglo original.
const nuevoArreglo = [...tecnologias, 'MySQL']

// console.log(nuevoArreglo);

//Eliminar elementos de una mejor manera: FILTER.
//Además de permitirme filtrar elementos me permite iterar sobre que elementos hay
// const nuevoArray = [...tecnologias.filter( function(tecnos) {
//     return tecnos === 'React'
// })]

//Reemplazar elementos de un arreglo:
// tecnologias[0] = "Nuevo Valor" - No se recomienda.
//El metodo map puede agregar condiciones las cuales podrian reemplazar elementos
const nuevoArray = tecnologias.map(function(tech){
    if ( tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})
console.table(tecnologias);
console.table(nuevoArray);