// const square = (num) => num * num

// const squareLong  = (num) => {
//     return num * num
// }

// console.log(square(6))
// console.log(squareLong(7))

const people = [{
    name: "Bello",
    age: 25
}, {
    name: "Tosin",
    age: 31
}, {
    name: "Joke",
    age: 22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

// const over30 = people.filter((person) => person.age > 30)

// console.log(under30)
// console.log(over30)

const findPerson = people.find((person) => person.age === 25)

console.log(findPerson.name)

const team = ["Tyler", "Jen", "David", "Peter"]

const message = team.length <= 4 ? `Team size: ${team.length}` : "To many people on your team"
console.log(message)