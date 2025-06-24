//Determinar si un número es par o impar
// operadores aritméticos y condicionales. 
// Debes escribir un programa que:
//Solicite al usuario que ingrese un número entero.

const prompt = require("prompt-sync")()

let numero = parseFloat(prompt("Ingrese un numero entero:"));
//Determine si el número es par o impar.
//Utiliza el operador módulo (%) para comprobar si el número es divisible por 2.

const resultado = numero % 2;

//Muestre un mensaje indicando si el número es par o impar.
//Usa una estructura if-else para mostrar el mensaje adecuado.

if (resultado % 2 === 0) {
    console.log("Numero par");
} else {
    console.log("Numero impar");
}
