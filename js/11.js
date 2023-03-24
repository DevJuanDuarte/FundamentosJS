const tecnologias = ['HTML' , 'CSS', 'Javascript' , 'React' , 'NodeJS']

//ForEach solo permite listar y acceder al elemento
const arrayForEach = tecnologias.forEach(function(tech) {
    return tech
})
//Es más recomendable usar map para react ya que te permite crear un nuevo arreglo
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

console.log(arrayForEach);
console.log(arrayMap);
