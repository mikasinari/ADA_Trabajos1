//¿Sabes contar?
//Crea un programa que le pida al usuario un número positivo. 
//El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
//Usa un ciclo for para realizar la tarea.

const prompt = require("prompt-sync")();

//Solicitar al usuario un número positivo. uso de parseInt para asegurar que es un número entero.
let numero = parseInt(prompt("Ingresa un número positivo: "));

if (numero > 0) { //Verificar que el número es positivo
    for (let i = 1; i <= numero; i++) { //Contar desde 1 hasta el número ingresado
        console.log(i); //Imprimir cada valor en la consola
    }
} else {
    console.log("Por favor, ingresa un número positivo.");
}