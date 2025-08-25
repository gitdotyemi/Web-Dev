const account = {
    name: "Bello Opeyemi",
    incomes: [],
    expenses: [],
    addIncome: function (description,  amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpenses = 0
        this.incomes.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        let balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

account.addIncome("Job", 1000)
account.addExpense("Rent", 950)
account.addExpense("coffee", 2)
// console.log(account)
console.log(account.getAccountSummary())