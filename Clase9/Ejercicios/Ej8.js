// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.

const prompt = require("prompt-sync")();

let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado: "));

// Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
// (Investiga sobre los triángulos para determinar la formula)

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero."); // Todos los lados son iguales
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("El triángulo es isósceles."); // Dos lados son iguales
} else {
    console.log("El triángulo es escaleno."); // Todos los lados son diferentes
}  