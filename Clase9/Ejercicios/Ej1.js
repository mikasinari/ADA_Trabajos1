// Declara dos variables numéricas numero1 y numero2. 
// Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

//Ejecutar accion.

if (numero1 > numero2) {
    console.log("El primer numero es mayor que el segundo.");
}else if (numero1 < numero2) {
    console.log("El segundo numero es mayor que el primero.");
}else if (numero1 === numero2) {
    console.log("Los numeros son iguales.");
}
