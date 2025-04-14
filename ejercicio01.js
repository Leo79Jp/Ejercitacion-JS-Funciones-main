// Suma de dos números:

// Escriba un programa en JavaScript con una función que tome como parámetros dos enteros, los sume y devuelva como resultado la suma. El programa deberá pedir al usuario los dos números, luego llamar a la función con los números leídos como argumentos y, por último, informar al usuario el valor de la suma.
const prompt = require('prompt-sync')({ siging: true})

let a = parseInt(prompt(`Ingrese el primer número: `))
let b = parseInt(prompt(`Ingrese el segundo número: `))

const sumar = (nro1, nro2) => nro1 + nro2;
const resultado = sumar(a, b);

console.log(`El resultado es: ${resultado}`);

  