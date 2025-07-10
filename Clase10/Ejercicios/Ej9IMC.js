//Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC).
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//ParseFloat: e utiliza para convertir una cadena de texto (string) en un número de punto flotante (decimal).
//Esto es útil cuando trabajas con datos ingresados por el usuario, que normalmente son cadenas de texto, pero
//necesitas realizar operaciones numéricas con esos datos.
//Pista 2: La fórmula puede representarse asi:
//let imc = peso / (altura * altura);

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kg: ")); // Solicita al usuario su peso en kg
let altura = parseFloat(prompt("Ingrese su altura en metros: ")); // Solicita al usuario su altura en metros

let imc = peso / (altura * altura);

console.log("Su Índice de Masa Corporal (IMC) es: " + imc);