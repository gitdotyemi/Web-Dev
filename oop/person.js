const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person("Opeyemi", "Bello", 25, ["Video games", "Music"])
const you = new Person("Andrew", "Mead", 27)

me.setName("Tosin Fayemi")
console.log(me.getBio())
console.log(you)

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person("Opeyemi", "Bello", 25, ["Video games", "Music"])
const you = new Person("Andrew", "Mead", 27)

me.setName("Tosin Fayemi")
console.log(me.getBio())
console.log(you)

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person("Opeyemi", "Bello", 25, ["Video games", "Music"])
const you = new Person("Andrew", "Mead", 27)

me.setName("Tosin Fayemi")
console.log(me.getBio())
console.log(you)

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person("Opeyemi", "Bello", 25, ["Video games", "Music"])
const you = new Person("Andrew", "Mead", 27)

me.setName("Tosin Fayemi")
console.log(me.getBio())
console.log(you)

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person("Opeyemi", "Bello", 25, ["Video games", "Music"])
const you = new Person("Andrew", "Mead", 27)

me.setName("Tosin Fayemi")
console.log(me.getBio())
console.log(you)

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}


const me = new Person("Opeyemi", "Bello", 25, ["Video games", "Music"])
const you = new Person("Andrew", "Mead", 27)

me.setName("Tosin Fayemi")
console.log(me.getBio())
console.log(you)