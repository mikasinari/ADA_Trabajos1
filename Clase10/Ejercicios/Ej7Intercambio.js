//Intercambio de Valores: 
// Declara dos variables con valores iniciales y luego intercambia sus valores. 
// Muestra los valores antes y después del intercambio en la consola. 
// Para intercambiar valores puedes usar varios métodos
// (usando una variable temporal, aritmética o asignación simultanea), 
// eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

let primerValor = "Perros"; // Valor inicial de la primera variable
let segundoValor = "Callejeros"; // Valor inicial de la segunda variable

// Mostrar valores antes del intercambio
console.log("Antes del intercambio:");
console.log("Primer Valor: " + primerValor);
console.log("Segundo Valor: " + segundoValor);

// Intercambio de valores usando una variable temporal
let temp = primerValor;
primerValor = segundoValor;
segundoValor = temp;

// Mostrar valores después del intercambio
console.log("Después del intercambio:");
console.log("Primer Valor: " + primerValor);
console.log("Segundo Valor: " + segundoValor);

