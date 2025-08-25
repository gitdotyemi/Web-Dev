let myBook = {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    pageCount: 415
}

let OtherBook = {
    title: "The Peoples History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(OtherBook)

console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)


//Challenege Area
let tempConverter = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}

console.log(tempConverter(74))