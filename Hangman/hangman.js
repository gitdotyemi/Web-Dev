const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === " ") {
            puzzle = puzzle + letter
        } else {
            puzzle = puzzle  + "*"
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    isGuessUnique = !this.guessedLetters.includes(guess)
    isGuessBad = !this.word.includes(guess)

    if (isGuessUnique) {
        this.guessedLetters.push(guess)
    }

    if (isGuessUnique && isGuessBad) {
        this.remainingGuesses = this.remainingGuesses - 1
    }
}

const gameOne = new Hangman("Apple", 3)
gameOne.makeGuess("p")
gameOne.makeGuess("e")
gameOne.makeGuess("c")
console.log(gameOne.getPuzzle())
console.log(gameOne.remainingGuesses)

// const gameTwo = new Hangman("Ball", 3)
// console.log(gameTwo.getPuzzle())