// Factorial de un número:

// Escriba un programa en JavaScript con una función que reciba un valor entero positivo y devuelva su factorial.

const prompt = require('prompt-sync')({ siging: true})

let numero = parseInt(prompt(`Ingrese un número : `))

function factorial(a) {
    if(a > 0){
        return a
    }
    console.log('Debe ingresar un numero positivo');
}
if (factorial(numero)){

    console.log(factorial(numero));
}