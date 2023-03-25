//Comparación y operador estricto:
//Condicionales:

let disponible = 200
let retirar = 500

if (disponible > retirar) {
    console.log('Puede retirar');
} else {
    console.log('No puede retirar');
}
let num1 = 20
let num2 = "20"

//Agregando Number puede cambiar el string a entero y así la respuesta será que son iguales.
if (num1 === Number(num2)) {
    console.log("Son iguales");
} else {
    console.log('No son iguales');
}

const autenticado = true
if (autenticado) {
    console.log('Si esta autenticado');
}