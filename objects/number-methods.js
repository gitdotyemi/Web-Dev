let num = 103.941

console.log(num.toFixed())

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

//Challenge Area
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNumber
}

console.log(makeGuess(4))