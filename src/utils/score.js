// Variable que almacena la puntuación actual del jugador.
// Se inicializa en 0 cuando comienza el juego.
let score = 0;

// Reinicia la puntuación a 0.
export function resetScore() {
    score = 0;
}

// Aumenta la puntuación en 1 cada vez que el jugador obtiene un punto.
// Devuelve la nueva puntuación.
export function addPoint() {
    score++;
    return score;
}

// Devuelve la puntuación actual sin modificarla.
export function getScore() {
    return score;
}