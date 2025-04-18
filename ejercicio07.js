// Ordenar tres números:

// Diseñe un algoritmo en JavaScript que ordene tres números A, B, C en forma ascendente utilizando una función llamada menorMayor que tenga dos parámetros pasados por referencia y devuelva en el primer parámetro el valor menor y en el segundo el valor mayor.


const a = 200
const b = 1000
const c = 500

let menor =  Math.min(a, b, c)
let mayor =  Math.max(a, b, c)
const menorMayor = (min, max) => {
    if ((min == a && max == b) || (min == b && max == a)){ 
        console.log(min);
        console.log(c);
        console.log(max);
    }else if ((min == c && max == a) || (min == a && max == c)){
        console.log(min);
        console.log(b);
        console.log(max);
    }else{
        console.log(min);
        console.log(a);
        console.log(max);
    }
}

const resul =  menorMayor(menor, mayor)



