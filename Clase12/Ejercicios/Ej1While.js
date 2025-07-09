//Ejercicio 1: While
//Crea un programa que solicite al usuario ingresar números continuamente 
// hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

let suma = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Ingresa un número (negativo para salir):"));
    if (numero < 0) {
        break;
    }
    suma += numero;
}

console.log("La suma de los números ingresados es:", suma);