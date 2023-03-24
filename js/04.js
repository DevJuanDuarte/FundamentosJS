//Objetos:
const producto = {
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Destructuring: sirve para sacar valores y crear variables de un objeto
const { nombre, precio, disponible } = producto
console.log(nombre);
console.log(precio);
console.log(disponible);


//Object Literal Enhacement: hace lo contrario, lo coloca dentro de un objeto.
//Deben llamarse igual
const autenticado = true
const usuario = "Juan"

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// }

//Cuando los nombres son iguales, puedes deshacerte del lado derecho:
const nuevoObjeto = {
    autenticado,
    usuario
}
console.table(nuevoObjeto);