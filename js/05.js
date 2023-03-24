//Manipulación de objetos:
const producto = {
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

// Object.freeze(producto) - FREEZE: No deja modificarlo.
// Object.seal(producto) - SEAL: Permite modificar existentes, no permite añadir ni eliminar.

producto.nombre = "Monitor"
producto.imagen = "imagen.jpg"

console.table(producto)