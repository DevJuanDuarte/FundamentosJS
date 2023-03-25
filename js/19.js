//Condicionales ternarios:
const autenticado = false

!autenticado ? console.log('Está autenticado') : console.log('No está autenticado');


let saldo = 2000
let pagar = 2500
let tarjeta = true

saldo > pagar ? console.log('Puedes pagar') : tarjeta ? console.log('Puedes pagar con tarjeta') : console.log('No puedes pagar')