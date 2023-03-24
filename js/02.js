//Variables const:
const nombre = "Juan"
const precioDescuento = 500 //camelCase

//Al reasignarse lanzará un error.
// precioDescuento = 600

console.log(nombre);
console.log(precioDescuento);


//Symbols: únicos
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
//Esto da false porque los Symbols son unicos, por más que tengan el mismo valor
console.log(primerSymbol === segundoSymbol)


const descuento = null
console.log(typeof descuento)