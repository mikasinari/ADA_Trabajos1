// Declarar 4 variables utilizando la palabra reservada let 
// y asignarles valores según el tipo de dato que sugiera su nombre. 
// Además, realizar operaciones y validaciones adicionales sobre estos valores.
// Pasos a seguir:
// Declaración de Variables:
// 1. Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
// 2. Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
// 3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
// 4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

// Declaración de Variables:
let verdadero = false; // Variable booleana
let texto = "Las mariposas vuelan"; // Variable de tipo string
let numero = 27; // Variable numérica
let nada = null; // Variable que representa la ausencia de valor

// Operaciones y Validaciones:
// 1. Realiza una operación matemática usando la variable número, por ejemplo, 
// suma o resta con otro número de tu elección.
let suma = (numero + 10);  //Suma 10 al número

console.log("Resultado de la suma: " + suma); //Muestra el resultado de la suma


// 2. Concatena el “string” de la variable texto con otro mensaje adicional.
let mensajeConcatenado = texto + " y son hermosas"; // Concatena un mensaje adicional

console.log("Mensaje concatenado: " + mensajeConcatenado); // Muestra el mensaje concatenado


// 3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
const mensaje = (verdadero === false)
    ?"Hubo un error con sus datos"
    :"Bienvenido!!!"
console.log(mensaje)


// 4. Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
const error = (nada === null)
    ?"No tenemos acceso a ese dato"
    :"Perfecto, sus datos son correctos"
console.log(error);