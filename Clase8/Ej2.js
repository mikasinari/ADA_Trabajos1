//Verificar si un número es positivo, negativo o cero
//uso de condicionales (if, else)

const prompt = require("prompt-sync")();

// Pide al usuario que ingrese un numero

let numero = prompt("Ingrese un numero:");

//Utiliza una estructura de control de flujo (if, else if, else) para hacer las verificaciones.

if (numero > 0) {
    console.log("Numero positivo");
} else if (numero < 0){
    console.log("Numero negativo");
} else if (numero == 0) {
    console.log("Numero igual a cero")
}
