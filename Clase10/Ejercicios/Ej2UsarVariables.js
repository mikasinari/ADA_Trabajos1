// Escribe un programa que pida al usuario que ingrese 
// su nombre, su edad y su peso, 
// y luego muestre un mensaje personalizado que incluya toda esta información.
// Pista: En el ejercicio anterior, declaramos valores en las variables.
// Ahora nos toca pedir datos al usuario, por lo que usaremos prompt-sync 
// para solicitar esta información.

const prompt = require('prompt-sync')();

//1. Pide al usuario que ingrese su nombre.
//2. Pide al usuario que ingrese su edad.
//3. Pide al usuario que ingrese su peso.

let nombre = prompt("Ingresa tu nombre: ");

let edad = prompt("Ingresa tu edad: ");

let peso = prompt("Ingresa tu peso: ");

//4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.

console.log("Hola, mucho gusto " + nombre + ", segun nuestros registros, tienes " + edad + " años y pesas " + peso + " kg. Es correcto?");

