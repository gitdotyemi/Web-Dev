const Hangman = function (guessWord,guessCount) {
    this.guessWord = guessWord
    this.guessCount = guessCount
}

const playerOne = new Hangman("School", 3)
const playerTwo = new Hangman("Food", 2)

console.log(playerOne)
console.log(playerTwo)