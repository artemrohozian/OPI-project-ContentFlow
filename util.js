

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(secret, guess) {
    if (guess > secret) {
        return "Занадто велике число!";
    } else if (guess < secret) {
        return "Занадто мале число!";
    } else {
        return "Вгадав 🎉";
    }
}

module.exports = {
    getRandomNumber,
    checkGuess
};


