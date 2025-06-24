//Ejercicio: Calcula el doble de un numero
//Utiliza la función prompt() para solicitar el dato al usuario.
//Almacena el número ingresado en una variable.
//Utiliza un operador aritmético para calcular el doble del número.

const prompt = require("prompt-sync")({ sigint: true });

//Solicite al usuario que ingrese un número cualquiera

let numero = prompt("Ingrese un numero:");
const resultado = numero * 2

console.log("Resultado: ", resultado);
