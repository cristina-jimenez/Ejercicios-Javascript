/* Reto! Juego de Piedra, Papel o Tijera, donde se le dirà si ganò, perdiò o empatò. */

var jugador = "piedra";
var pc = "papel";

if((jugador == "piedra" && pc == "papel") || (jugador == "piedra" && pc == "tijera") || (jugador == "papel" && pc == "piedra") || (jugador == "tijera" && pc == "papel")){
    console.log("Ganaste, retira tu premio");
} else if((jugador == "papel" && pc == "tijera") || (jugador == "tijera" && pc == "piedra") || (jugador == "piedra" && pc == "papel")){
    console.log("Perdiste, lo sentimos");
} else if ((jugador == "piedra" && pc == "piedra") || (jugador == "tijera" && pc == "tijera") || (jugador == "papel" && pc == "papel")){
    console.log("Empate");
} else {
    console.log("Porfavor ingrese una opción válida.");
}
