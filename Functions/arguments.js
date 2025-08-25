//Multiple Arguments
let add = function (a, b) {
    return a + b
}

let result = add(10, 5)
console.log(result)


//Default Arguments
let getScoreText = function (name = "Anonymous", score = 0) {
    // return "Name: " + name + " - Score: "  + score
    return `Name: ${name} - Score: ${score}.`
}

let scoreText = getScoreText("Omotola")
console.log(scoreText)


//Challenge Area
let getTip = function (total, tipPercent = .2) {
    percent = tipPercent * 100
    tipAmouunt = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tipAmouunt}`
}
let tip = getTip(50)
console.log(tip)