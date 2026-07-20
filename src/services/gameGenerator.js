import { getRandomNumber } from "../utils/randomNumber";
import { shuffle } from "../utils/shuffle";

const objects = [
    "apple",
    "lion",
    "ball",
    "banana",
    "cat",
    "dog",
    "star",
    "car"
];

export function generateGame() {

    const object =
        objects[getRandomNumber(0, objects.length - 1)];

    const quantity = getRandomNumber(1, 9);

    const wrong1 =
        quantity + getRandomNumber(1, 3);

    let wrong2 =
        quantity - getRandomNumber(1, 2);

    if (wrong2 <= 0)
        wrong2 = quantity + 4;

    const options = shuffle([
        quantity,
        wrong1,
        wrong2
    ]);

    return {
        object,
        quantity,
        correctAnswer: quantity,
        options
    };
}