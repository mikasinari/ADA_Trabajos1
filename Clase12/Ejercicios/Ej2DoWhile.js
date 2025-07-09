//Ejercicio 2: Do While
//Escribe un programa que solicite al usuario ingresar una contraseña. 
// Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. 
// La contraseña correcta es "1234".

//const prompt = require("prompt-sync")();

//let password;
//do {
    //password = prompt("Ingrese la contraseña: ");
//} while (password !== "1234");

//console.log("Contraseña correcta.");


// Definimos la contraseña correcta
const CONTRASENA_CORRECTA = "1234";

// Variable para almacenar la contraseña ingresada por el usuario
let contrasenaIngresada;

// Usamos un bucle do...while para pedir la contraseña hasta que sea correcta
do {
  contrasenaIngresada = prompt("Por favor, ingresa la contraseña:");

  // Comparamos la contraseña ingresada con la correcta
  if (contrasenaIngresada !== CONTRASENA_CORRECTA) {
    alert("Contraseña incorrecta. Inténtalo de nuevo.");
  }

} while (contrasenaIngresada !== CONTRASENA_CORRECTA); // El bucle continúa mientras la contraseña sea incorrecta

// Si salimos del bucle, significa que la contraseña es correcta
alert("¡Contraseña correcta! Acceso concedido.");
