// Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 

const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingrese su edad: "));

// Muestra un mensaje personalizado según el caso.

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}   