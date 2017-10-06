
const getExpensesTotal = (expenses) => {
    if (expenses.length == 0) {
        return 0;
    } else {
        const result = expenses.map((expense) => {
            return expense.amount;
        }).reduce((total, amount) => {
            return total + amount;
        });
        return result;
    }
}

export default getExpensesTotal;