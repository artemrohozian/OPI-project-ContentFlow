

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(secret, guess) {
    if (guess > secret) {
        return "Слишком большое число!";
    } else if (guess < secret) {
        return "Слишком маленькое число!";
    } else {
        return "Угадал 🎉";
    }
}

module.exports = {
    getRandomNumber,
    checkGuess
};



