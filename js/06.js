//Destructuring con 2 o más objetos:
const producto = {
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const { nombre, precio, disponible } = producto
//Agregando un alias permite que se pueda llamar la variable con el mismo nombre de un objeto sin mostrar el error de ya ha sido declarada.
const { nombre: nombreCliente, premium } = cliente

console.log(nombre);
console.log(nombreCliente);