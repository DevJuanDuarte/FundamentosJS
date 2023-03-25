//Arrays Methods:

//Filter:
const numeros = [10,20,30]
const tecnologias = ['HTML' , 'CSS', 'Javascript' , 'React' , 'NodeJS']
nuevoArray = tecnologias.filter( tech => tech !== 'HTML')
console.log(nuevoArray);


//Includes: Comprobar si un elemento existe dentro del array:
const resultado = tecnologias.includes('Python')
console.log(resultado);
const resultado2 = tecnologias.includes('React')
console.log(resultado2);

//Some: Comprueba que al menos una vez se cumpla la condición
const resultado3 = numeros.some(numero => numero > 31)
console.log(resultado3);
const resultado4 = numeros.some(numero => numero > 15)
console.log(resultado4);


//Find: Devuelve el primer elemento que cumpla la condición:
const resultado6 = numeros.find(numero => numero > 9)
const resultado5 = numeros.find(numero => numero > 15)
console.log(resultado6);
console.log(resultado5);


//Every: Devuelve true si todos cumplen la condición, de lo contrario false:
const resultado7 = numeros.every(numero => numero > 11)
console.log(resultado7);


//Reduce: acumulando el total
const resultado8 = numeros.reduce((total,numero)=> total + numero, 0)
console.log(resultado8);


//Filter: crea un nuevo array en base a una condición:
const resultado9 = tecnologias.filter(tech => tech !== 'NodeJS')
console.log(resultado9);
const resultado10 = numeros.filter(numero => numero === 20)
console.log(resultado10);


tecnologias.forEach( (tech,index) =>  console.log(index))
//Es más recomendable usar map para react ya que te permite crear un nuevo arreglo

const arrayMap = tecnologias.map(tech => tech)
console.log(arrayMap);



