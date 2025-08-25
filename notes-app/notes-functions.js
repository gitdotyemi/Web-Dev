//Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

//Remove note from local storage
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

//Genarate DOM structure for a note
const generateNoteDM = (note) => {
    const noteEl = document.createElement("div")
    const textEl = document.createElement("a")
    const button = document.createElement("button")

    //Set up remove buutton
    button.textContent = "X"
    noteEl.appendChild(button)
    button.addEventListener("click", () => {
      removeNote(note.id)
      saveNotes(notes)
      renderNotes(notes, filters)
    })

    //Set up notte text
    if (note.title.length > 0) {
      textEl.textContent = note.title
    } else {
      textEl.textContent = "Unnamed Note"
    }

    textEl.setAttribute("href", `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    //Return note element
    return  noteEl
}

//Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === "byEdited")  {
    notes.sort((a,b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === "byCreated") {
    notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt)  {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === "alphabetical") {
    notes.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  }else {
    return notes
  }
}

//Render saved notes
const renderNotes = (notes, filters) => {
  // notes = sortNotes(notes, filters.sortBy)

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
  
  document.querySelector("#notes").innerHTML = ""
  
  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDM(note)
    document.querySelector("#notes").appendChild(noteEl)
  })
}

// Generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`