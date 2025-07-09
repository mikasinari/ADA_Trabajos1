//Genera un numero aleatorio entre 1 y 10

//toda interaccion con el usuario requiere de usar un prompt.

const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 10) + 1; //funciones predefinidas. Math es una. Math.random() genera un numero aleatorio entre 0 y 1. Multiplicamos por 10 para que sea entre 0 y 10, y luego le sumamos 1 para que sea entre 1 y 10.
// Math.floor() redondea hacia abajo el numero aleatorio generado, para que sea un entero.

let acierto = false; // Variable para controlar si el usuario adivina el número. Mejor si se comienza negando la variable.

for (let intento = 1; intento <=3; intento++) {
  const adivinanza = parseInt(prompt(`Intento ${intento}: Adivina el número del 1 al 10`))
  // Estructura switch para evaluar la entrada del usuario
  switch (true) {  //usamos switch porque queremos un valor en especifico, y no un valor por defecto. El true nos permite evaluar las condiciones dentro del switch.
    case adivinanza === numeroSecreto: // Si el usuario adivina el número secreto.
      console.log(`🎉 ¡Felicitaciones! Adivinaste el número en el intento ${intento}`); 
      acierto = true;
      break;
    case adivinanza < numeroSecreto:
      console.log("📉 Muy bajo... ¡intenta un número más alto!");
      break;
    case adivinanza > numeroSecreto:
      console.log("📈 Muy alto... ¡intenta un número más bajo!");
      break; 
  }
  // Operador ternario para cortar el bucle si acertó
  if (acierto ? true : false) break;
}
if (!acierto) {
    console.log(`😢 Lo siento... el número secreto era ${numeroSecreto}`);  
  }