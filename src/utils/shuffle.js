// Función que mezcla aleatoriamente los elementos de un arreglo
export function shuffle(array) {

    // Se crea una copia del arreglo original para no modificarlo
    const arr = [...array];

    // Recorre el arreglo desde el último elemento hasta el segundo
    for (let i = arr.length - 1; i > 0; i--) {

        // Genera un índice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));

        // Intercambia el elemento actual con el elemento del índice aleatorio
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Devuelve el arreglo ya mezclado
    return arr;
}