//Control de flujo: If ternario
//condicion ? valorSiEsVerdadera : valorSiEsFalso

// let hambre = prompt("¿Tenés hambre? (si/no): ")

let hambre = true; //siempre inicializar la variable asignandole algun valor

let accionar = hambre ? "Como pizza 🍕" : "Sigo sin comer 🤐";

console.log(accionar);
console.log(hambre);

// Control de flujo: Switch
// Simular un menú de comida con opciones de pizza y ensalada,

const prompt = require('prompt-sync')(); //dejar por default el nombre de la variable como prompt. es una buena practica.

let Pedido = prompt("¿Qué deseas pedir?: ").toLowerCase();  // Convierte la entrada a minúsculas para evitar problemas de coincidencia

switch (Pedido) {
    case "pizza":
        console.log("Elegiste pizza 🍕");
        break;
    case "ensalada":
        console.log("Elegiste ensalada 🥗");
        break; 
    default:
        console.log("Esa opcion no esta en el menu");
        break;
}

// Control de flujo: For

