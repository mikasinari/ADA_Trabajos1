// Declara una variable nombre y pide al usuario que ingrese su nombre. 

const prompt = require("prompt-sync")();

let nombre = prompt("Ingrese su nombre: ");

// Verifica si el nombre ingresado es igual a tu nombre.

if (nombre.toLowerCase() === "Micaela".toLowerCase()) {
    console.log("¡Hola, nos llamamos igual!");
} else {
    console.log("¡Hola, " + nombre + "!" + " No nos llamamos igual.");
} 

