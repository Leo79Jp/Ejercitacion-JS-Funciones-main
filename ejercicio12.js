// Conversión de monedas:

// Escriba una función en JavaScript llamada ConversionPesos que permita convertir una cantidad de dinero dada en dólares, libras, yenes o euros a Pesos Argentinos. Utilice las siguientes equivalencias aproximadas:
// 1 libra = 905.75 pesos
// 1 dólar = 1305.75 pesos
// 1 yen = 8.69 pesos
// 1 euro = 968.52 pesos
const prompt = require('prompt-sync')({ siging: true})
const monedas = {
    libra: 905.75,
    dolar: 1305.75,
    yen: 8.69,
    euro: 968.52
}
let numero = parseInt(prompt(`Ingrese un número : `))

function ConversionPesos(x) {
    if (numero){
        console.log(`• ${numero} Libra son : ${monedas.libra * x} pesos`);
        console.log(`• ${numero} dolar son : ${monedas.dolar * x} pesos`);
        console.log(`• ${numero} yen son : ${monedas.yen * x} pesos`);
        console.log(`• ${numero} euro son : ${monedas.euro * x} pesos`);
    }
} 

ConversionPesos(numero)