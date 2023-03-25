let saldo = 1000
let pagar = 1500
let tarjeta = true

//Or
if (saldo > pagar || tarjeta) {
    console.log('Puedes pagar')
} else {
    console.log('No puedes pagar');
}

//And
if (saldo > pagar && tarjeta) {
    console.log('Puedes pagar')
} else {
    console.log('No puedes pagar');
}