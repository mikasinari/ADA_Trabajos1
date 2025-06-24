//Suma de dos números ingresados por el usuario
//entrada de datos y uso de operadores aritméticos. 

//Pedir al usuario que ingrese dos números.
//Utiliza prompt() para recibir los números.
//Utiliza parseFloat() para convertir las entradas a números.

const prompt = require("prompt-sync")()

let a = parseFloat(prompt ("Ingrese numero uno: "));
let b = parseFloat(prompt ("Ingrese numero dos: "));

//Que el programa Sume ambos números.

const resultado = a + b;

// y Muestre el resultado de la suma.

console.log("La suma de los numeros es:", resultado);

//Almacena los resultados en variables adecuadas y muestra el resultado.
