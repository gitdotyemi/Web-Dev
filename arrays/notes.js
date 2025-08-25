const notes = [{
    title: "My next trip",
    body: "I would like to go to spain."
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better."
}, {
    title: "Office modification",
    body:  "Get a new seat."
}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })

//     return notes[index]
// }

// const findNote = function (notes, noteTitle) {
//     const note = notes.find(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })

//     return note
// }

// const note = findNote(notes, "my next trip")
// console.log(note)

// const filteredNotes = function (notes, searchText) {
//     const note = notes.filter(function (note, index) {
//         isTitleMatch = note.title.toLowerCase().includes(searchText)
//         isBodyMatch = note.body.toLowerCase().includes(searchText)

//         return isTitleMatch || isBodyMatch
//     })

//     return note
// }

// console.log(filteredNotes(notes, "office"))

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)