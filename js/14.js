//Arrow Functions: Los arrow functions brilla más con los return


//Esto:
const sumar = (num1 = 0, num2 = 0) => {
    return num1 + num2
}
const resultado = sumar(30)
console.log(resultado);


//Es lo mismo que esto.
//Este solo funciona si solo es una linea de codigo, en este caso era return num1 + num2
const sumar2 = (num1 = 0, num2 = 0) => num1 + num2
const resultado2 = sumar2(40,20)
console.log(resultado2);


//Este solo aplica si tiene un solo parametro, en este caso solo está número.
const sumar3 = numero => numero +20
const resultado3 = sumar3(30)
console.log(resultado3);

//Función flecha que retorna el valor de 1994 + 2.
const suma4 = () => 1994 + 2
const resultado4 = suma4()
console.log(resultado4);






