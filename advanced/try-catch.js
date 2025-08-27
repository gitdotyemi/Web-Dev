const getTip = (amount) => {
    if (typeof amount === "number") {
        return `$${amount * .25}`
    } else {
        throw Error(("Argument must be a number"))
    }
}

try {
    console.log(getTip(10))
} catch (e) {
    console.log("Catch block is running")
}