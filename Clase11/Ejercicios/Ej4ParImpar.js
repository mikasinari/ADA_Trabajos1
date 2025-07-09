// Par o Impar?
// Los números pueden ser pares o impares. 
// Escribe un programa que le pida al usuario un número y determine si es par o impar. 
// Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresa un número entero: "));

let resultado = (numero % 2 === 0) ? "El numero que ingresaste es par" : "El numero que ingresaste es impar";

console.log(resultado); 





