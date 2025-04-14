// Suma con tercer argumento:

// Escriba un programa en JavaScript similar al anterior, pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.

const prompt = require('prompt-sync')({ siging: true})

let a = parseInt(prompt(`Ingrese el primer número: `))
let b = parseInt(prompt(`Ingrese el segundo número: `))

const sumar = (nro1, nro2) => nro1 + nro2

const calculo = (num1, num2, operacion) => {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Los argumentos no son numeros'
    }
    return operacion(num1, num2)
  }

const resultado = calculo(a, b, sumar);
console.log(`El resultado es: ${resultado}`);
