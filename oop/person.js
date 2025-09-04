const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio =  `${this.firstName} is ${this.age} years old.`
    this.likes.forEach((like) => {
        bio = bio + ` ${this.firstName} likes ${like}. `
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(" ")
    firstName = names[0]
    lastName = names[1]
}

const me = new Person("Lasisi", "Tosin", 29)
console.log(me.getBio())

const you  = new Person("Bello", "Opeyemi", 25, ["Video Games", "Biking"])
you.setName("Sam Black")
console.log(you.getBio())