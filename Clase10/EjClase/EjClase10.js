//Simular un sistema de ingreso a una nave espacial donde los tripulantes 
// deben pasar filtros de validacion usando operadores lógicos. 


const prompt = require('prompt-sync')();

let nombre = prompt("¿Cuál es tu nombre galáctico? ");
let edad = Number(prompt("¿Cuál es tu edad terrestre? "));
let especie = prompt("¿Cuál es tu especie? (Humano, Alien, Cyborg) ");

let puedeSubir = (edad >= 18 && especie !== "") || nombre === "Capitana";

const mensaje = puedeSubir
  ? "✅ ¡Bienvenida a bordo, " + (nombre || "Tripulante Desconocido") + "!"
  : "⛔ Acceso denegado. No cumplís los requisitos.";

console.log (mensaje);