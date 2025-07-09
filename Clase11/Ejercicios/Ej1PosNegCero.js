//¿Positivo, negativo o cero?
//Escribe un programa que le pida al usuario un número cualquiera. 
//El programa deberá analizar si el número ingresado es positivo, negativo o cero. 
//Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require('prompt-sync')();

let numero = prompt("Ingresa un numero cualquiera: ");

if (numero > 0) {
    console.log("El numero que ingresaste es positivo.");
} else if (numero < 0) {
    console.log("El numero que ingresaste es negativo.");
} else {
    console.log("El numero que ingresaste es cero.");
}
