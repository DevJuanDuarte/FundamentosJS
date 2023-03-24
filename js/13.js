// Funciones Express

const sumar = function(numero1, numero2) {
    return numero1 + numero2
}
const resultado = sumar(5,10)
console.log(resultado);

//NOTA: En function declaration puede ir antes o despues porque javascript primero registra todas las funciones en una fase de creacion y luego las ejecuta por lo tanto no importa, pero en este caso puedes ver que es una variable y las variables no se registran en fase de creación hasta la fase de ejecución