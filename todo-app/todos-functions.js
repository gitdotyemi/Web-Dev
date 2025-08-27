"use strict"

//Fetch existing todos from local storage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem("todos")
    
    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

//Save todo to local storage
const saveTodo = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//Remove todo from local storage
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Toggle todo to change completed status
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

//Render application todo based on filter
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filteredTodos = filteredTodos.filter((todo) => {
        return filters.hideCompleted ? !todo.completed : todos
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector("#todos").innerHTML = ""

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector("#todos").appendChild(summary)

    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo)
        document.querySelector("#todos").appendChild(todoEl)
    })
}

//Genearate DOM element for individual todo
const generateTodoDOM = function (todo) { 
    const todoEl = document.createElement("div")
    const checkBox = document.createElement("input")
    const todoText = document.createElement("span")
    const button = document.createElement("button")
  
    //Set up chheckbox
    checkBox.setAttribute("type", "checkbox")
    checkBox.checked = todo.completed
    todoEl.appendChild(checkBox)
    checkBox.addEventListener("change", () => {
        toggleTodo(todo.id)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    //Set up thhe todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //Set up remove button
    button.textContent  = "X"
    todoEl.appendChild(button)
    button.addEventListener("click", () => {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    //Return todo element
    return todoEl
}

//Generate the DOM element for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} things to do`

    return summary
}