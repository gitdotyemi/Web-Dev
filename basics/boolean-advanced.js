let isAccountLocked = false
let userRole = "Admin"

if (isAccountLocked) {
    console.log("Account is locked.")
} else if (userRole === "Admin") {
    console.log("Welcome admin!")
} else {
    console.log("Welcome")
}


//Challenge Area
let temp = 65

if (temp <= 32) {
    console.log("It's freezing outside.")
} else if (temp >= 110) {
    console.log("It's way too hot outside.")
} else (
    console.log("Go for it, it's pretty nice outside.")
)