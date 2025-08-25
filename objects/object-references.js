let myAccount = {
    name: "Bello Opeyemi",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `${account.name} has a balance of $${balance}. $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))