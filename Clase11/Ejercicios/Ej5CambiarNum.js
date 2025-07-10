//Encuentra los números pares entre dos valores
//Consigna:
//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
// El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
// incluyendo los límites si son pares. 
// Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
// Si el número inicial es mayor que el final, el programa debe mostrar un mensaje 
// indicando que los valores son inválidos.

const prompt = require("prompt-sync")();

let numeroinicio = parseInt(prompt("Ingresa un número de inicio: "));

let numerofin = parseInt(prompt("Ingresa un número de fin que sea menor al de inicio: "));

numeroinicio > numerofin ? console.log("Los valores ingresados son inválidos.") : null;

for (let i = numeroinicio; i <= numerofin; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



