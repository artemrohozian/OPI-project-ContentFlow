const readline = require('readline');
const utils = require('./util.JS');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = utils.getRandomNumber(1, 10);

console.log("🎮 Гра: Вгадай число від 1 до 10");

function ask() {
    rl.question("Введи число: ", (answer) => {
        const guess = Number(answer);
        const result = utils.checkGuess(secretNumber, guess);

        console.log(result);

        if (result === "Вгадав 🎉") {
            rl.close();
        } else {
            ask();
        }
    });
}

ask();