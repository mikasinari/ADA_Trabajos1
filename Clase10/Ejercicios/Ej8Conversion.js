//Conversión de Temperaturas: 
// Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
//Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse asi:
//let fahrenheit = celsius * 9 / 5 + 32;

const prompt = require('prompt-sync')(); 

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: ")); // Solicita al usuario la temperatura en Celsius

let fahrenheit = celsius * 9 / 5 + 32; // Convierte Celsius a Fahrenheit

console.log("La temperatura en grados Fahrenheit es: " + fahrenheit);