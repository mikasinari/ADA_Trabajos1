//Saludo personalizado
//manipulación de cadenas de texto y la función prompt(). Escribe un programa que:
//Solicite al usuario que ingrese su nombre. Utiliza prompt() para recibir el nombre del usuario.

const prompt = require("prompt-sync")()

let nombre = prompt("Ingrese su nombre: ");

//Muestre un saludo personalizado usando el nombre ingresado.
//Muestra un mensaje utilizando concatenación de cadenas.

console.log("Hola, ¿que tal " + nombre+ "?, " + "un placer que estes por aqui.");

