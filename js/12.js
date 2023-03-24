//Funciones:
//Funcion Declaration:
// function sumar() {
//     console.log(2+2);
// }
//Llamar función.
// sumar()


//Funciones con parametros y argumentos:
// function sumar(numero1 , numero2 = 5) {
//     console.log(numero1 + numero2);
// }
// sumar(5,10)
//Al agregar al parametro un valor 5 lo toma como parte de la suma y lo añade al argumento.
// sumar(20)
// sumar(15,80)


//FUNCIONES QUE RETORNAN VALORES:
function sumar(numero1 = 0, numero2 = 0) {
    return {
        operacion: numero1 + numero2,
        texto: 'Hola Mundo'
    }
}

const {operacion, texto} = sumar(5, 10)
console.log(operacion);
console.log(texto);