// Define una constante PI con el valor de pi (3.14159).

const prompt = require("prompt-sync")();

const PI = 3.14159;

// Pide al usuario que ingrese el radio de un círculo y 
// calcula su área y perímetro utilizando la constante PI.

let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
let area = PI * Math.pow(radio, 2);
let perimetro = 2 * PI * radio;

console.log("El área del círculo es: " + area.toFixed(2));
console.log("El perímetro del círculo es: " + perimetro.toFixed(2));


