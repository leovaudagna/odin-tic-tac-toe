//DOM
const cuadrados = document.querySelectorAll(".cuadrado");
const tableroHTML = document.getElementById("gameboard");
const comenzarBoton = document.getElementById("start-button");
const resetearBoton = document.getElementById("restart-button");
const estadoJuego = document.getElementById("game-state");
const nombreJugador1 = document.getElementById("player1-nombre");
const nombreJugador2 = document.getElementById("player2-nombre");

//VARIABLES GLOBALES
let cuadradoApretado = null;

//CREAR JUGADOR
function crearJugador(nombre, simbolo) {

    let getNombre = () => nombre;
    let getSimbolo = () => simbolo;

    return { getNombre, getSimbolo };
}

function crearTablero() {
    return ["", "", "", "", "", "", "", "", "",];
}

//RENDER TABLERO
function renderTablero(tableroHTML, contenido) {
    for (let i = 0; i < contenido.length; i++) {
        tableroHTML.children[i].innerHTML = contenido[i];
    }

}

//CORROBORAR GANADOR
function chequearSiHayGanador(tablero, jugador) {

    let hayGanador = false;

    if (
        //HORIZONTAL
        (tablero[0] == jugador.getSimbolo() && tablero[1] == jugador.getSimbolo() && tablero[2] == jugador.getSimbolo()) ||
        (tablero[3] == jugador.getSimbolo() && tablero[4] == jugador.getSimbolo() && tablero[5] == jugador.getSimbolo()) ||
        (tablero[6] == jugador.getSimbolo() && tablero[7] == jugador.getSimbolo() && tablero[8] == jugador.getSimbolo()) ||

        //VERTICAL
        (tablero[0] == jugador.getSimbolo() && tablero[3] == jugador.getSimbolo() && tablero[6] == jugador.getSimbolo()) ||
        (tablero[1] == jugador.getSimbolo() && tablero[4] == jugador.getSimbolo() && tablero[7] == jugador.getSimbolo()) ||
        (tablero[2] == jugador.getSimbolo() && tablero[5] == jugador.getSimbolo() && tablero[8] == jugador.getSimbolo()) ||

        //CRUZADO
        (tablero[0] == jugador.getSimbolo() && tablero[4] == jugador.getSimbolo() && tablero[8] == jugador.getSimbolo()) ||
        (tablero[2] == jugador.getSimbolo() && tablero[4] == jugador.getSimbolo() && tablero[6] == jugador.getSimbolo())
    ) {
        console.log(`El ${jugador.getNombre()} ha ganado la partida.`);
        hayGanador = true;
    } else {
        hayGanador = false;
    }

    return hayGanador;
}

function comenzarJuego() {

    let tablero = crearTablero();
    renderTablero(tableroHTML, tablero);

    let nombres = elegirNombres();

    let jugador1 = crearJugador(nombres[0], "X");
    let jugador2 = crearJugador(nombres[1], "O");

    nombreJugador1.innerHTML = jugador1.getNombre();
    nombreJugador2.innerHTML = jugador2.getNombre();

    let turnoPar = true;
    let hayGanador = false;

    estadoJuego.innerHTML = `Comienza ${jugador1.getNombre()}`;

    cuadrados.forEach((cuadrado) => {
        cuadrado.addEventListener("click", (e) => {

            if (hayGanador) return;

            cuadradoApretado = e.target.id;
            if (tablero[cuadradoApretado] != "") {
                alert("movimiento prohibido")
            } else {
                if (turnoPar) {
                    estadoJuego.innerHTML = `Es el turno de ${jugador2.getNombre()}`
                    elegirPosicion(tablero, cuadradoApretado, jugador1);
                    hayGanador = chequearSiHayGanador(tablero, jugador1);
                } else {

                    elegirPosicion(tablero, cuadradoApretado, jugador2);
                    hayGanador = chequearSiHayGanador(tablero, jugador2);
                    estadoJuego.innerHTML = `Es el turno de ${jugador1.getNombre()}`
                }

                turnoPar = !turnoPar;
                renderTablero(tableroHTML, tablero);
            }

            if (hayGanador) {
                estadoJuego.innerHTML = `Ganador: ${!turnoPar ? jugador1.getNombre() : jugador2.getNombre()}`;
            }
        });
    });

    resetearBoton.addEventListener("click", () => {
        tablero.fill("");
        turnoPar = true;
        hayGanador = false;
        renderTablero(tableroHTML, tablero);
    }
);



}

function elegirPosicion(tablero, posicion, jugador) {
    tablero[posicion] = jugador.getSimbolo();
}

//ELEGIR NOMBRES
function elegirNombres() {
    let nombre1 = prompt("Nombre de jugador 1: ")
    let nombre2 = prompt("Nombre de jugador 2: ");
    return [nombre1, nombre2];
}

comenzarBoton.addEventListener("click", comenzarJuego);


