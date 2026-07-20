let score = 0;

export function resetScore() {
    score = 0;
}

export function addPoint() {
    score++;
    return score;
}

export function getScore() {
    return score;
}