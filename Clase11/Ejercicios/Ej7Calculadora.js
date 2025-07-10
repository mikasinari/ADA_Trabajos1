//Calculadora simple
//Consigna:
//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: 
// suma, resta, multiplicación o división. Según la operación ingresada, 
// el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.

const prompt = require('prompt-sync')(); // Asegúrate de tener instalado el paquete prompt-sync

const num1 = parseFloat(prompt("Ingresa un numero entero:"));
const num2 = parseFloat(prompt("Ingresa un segundo numero entero:"));
const operacion = prompt("Ingresa la operación que quieres realizar (suma, resta, multiplicación, división):");

switch (operacion) {
    case "suma":
        console.log(`El resultado de la suma es: ${num1 + num2}`);
        break;
    case "resta":
        console.log(`El resultado de la resta es: ${num1 - num2}`);
        break;
    case "multiplicación":
        console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
        break;
    case "división":
        console.log(`El resultado de la división es: ${num1 / num2}`);
        break;
    default:
        console.log("Error: Operación inválida.");
}