const producto = {
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto);
console.log(cliente);
console.log(producto);