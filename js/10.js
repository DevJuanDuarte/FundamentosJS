//Destructuring de arrays:

const tecnologias = ['HTML' , 'CSS', 'Javascript' , 'React' , 'NodeJS']
//A diferencia de los objetos, el destructuring en arrays se ocupa por posiciones, en cambio que el destructuring de objetos se ocupa por el nombre de las variables.
const [ , , , , var5] = tecnologias

console.log(var5);