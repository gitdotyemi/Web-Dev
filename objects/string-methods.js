let name = "Bello Opeyemi"

//Length Property
console.log(name.length)

//Convert to upper case
console.log(name.toUpperCase())

//Convert to lower case
console.log(name.toLowerCase())

//Trim method
console.log(name.trim())

//Challenge Area
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes("password")
}

console.log(isValidPassword("asdfp"))
console.log(isValidPassword("abc123!@#$^&"))
console.log(isValidPassword("ssvbshjpassword$%^"))