// Función que genera un número entero aleatorio entre un valor mínimo y un valor máximo (incluidos).
export function getRandomNumber(min, max) {

    // Math.random() genera un número decimal entre 0 y 1.
    // Se multiplica por (max - min + 1) para obtener un número dentro del rango deseado.
    // Math.floor() elimina los decimales para obtener un número entero.
    // Finalmente, se suma 'min' para desplazar el resultado al rango indicado.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}