// Operaciones sobre un número:

// Escriba un programa en JavaScript que permita introducir un número por teclado y sobre él se realicen las siguientes operaciones: mostrar la cantidad de divisores, hallar su factorial, comprobar si es primo e imprimir su tabla de multiplicar.
const prompt = require('prompt-sync')({ siging: true})

let numero = parseInt(prompt(`Ingrese un número : `))

const divisores = (num) => {
    // numeros divisores
    for(let i = num; i >= 0; i--){
        if(num % i === 0){
            console.log(`Numeros divisores de  ${numero} : ${i}`);
        }
    }
}
const factorial = (num) => {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log(`El factorial de ${numero} : ${num}`);
  }
const primo = (num) => {
        for (let x = 2; x < num / 2; x++) {
            if (num % x == 0) {
                return false;
            }
        }
        console.log(`El numero ${num} es primo`);
        return true;   
     }
const tabla = (num) => {
    for(let i = 1; i <= 10; i++ ){
        console.log(`${numero} * ${i} = `, (num * i));
    }
}
divisores(numero);
factorial(numero);
primo(numero);
tabla(numero);