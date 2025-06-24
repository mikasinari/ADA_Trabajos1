// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, 
// con valores numéricos de tu elección. 
// Pide al usuario que ingrese un número y 
// verifica si está dentro del rango definido por las constantes.

const prompt = require("prompt-sync")();

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 20;        

let numero = parseFloat(prompt("Ingrese un numero: "));
// Ejecutar accion.

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El numero esta dentro del rango.");
}else {
    console.log("El numero esta fuera del rango.");
}
// Fin del ejercicio.