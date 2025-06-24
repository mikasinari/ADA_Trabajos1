// Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. 

const prompt = require("prompt-sync")();

let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos: "));

// Muestra el resultado con un mensaje. 
// (Averigua como pasar de kg a libras, Pista: 2.20462)

let pesoLibras = pesoKg * 2.20462;
console.log("Su peso en libras es: " + pesoLibras.toFixed(2) + " lbs.");


