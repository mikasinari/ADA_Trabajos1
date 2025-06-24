// Declara dos variables booleanas condicion1 y condicion2. 
// Pide al usuario que ingrese dos valores booleanos (true o false) 


const prompt = require("prompt-sync")();

let condicion1 = prompt("Ingrese el primer valor booleano (true/false): ").toLowerCase() === 'true';
let condicion2 = prompt("Ingrese el segundo valor booleano (true/false): ").toLowerCase() === 'true';

// muestra el resultado de diversas combinaciones lógicas.

console.log("Condicion 1:", condicion1);
console.log("Condicion 2:", condicion2);

console.log("Condicion 1 AND Condicion 2:", condicion1 && condicion2);
console.log("Condicion 1 OR Condicion 2:", condicion1 || condicion2);

console.log("Condicion 1 XOR Condicion 2:", (condicion1 || condicion2) && !(condicion1 && condicion2));
console.log("NOT Condicion 1:", !condicion1);



