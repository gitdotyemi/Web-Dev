let todos = [{
    text: "Order cat food",
    completed: true
}, {
    text: "Clean Kitchen",
    completed: false
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true
}]

// const deleteTodo = function (todos, todoText) {
//     const index = todos.findIndex(function (todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })

//     todos.splice(index, 1)
// }

// deleteTodo(todos, "clean kitchen")
// console.log(todos)

// const getThingsTodo = function (todos) {
//     return todos.filter(function (todo) {
//         return !todo.completed
//     })
// }

// console.log(getThingsTodo(todos))

const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)