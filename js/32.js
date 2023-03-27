//Template strings:
const  nombre = "Samsung Galaxy S23 Ultra"
const precio = 500
const color = 'Azul'

function textoDeFuncion() {
    return 'Desde la funcion'
}

console.log(`Producto: ${nombre}, Precio: $${precio}, Color: ${color} , ${textoDeFuncion()}`);