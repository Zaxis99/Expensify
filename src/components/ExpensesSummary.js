import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    return (
        <h1>Viewing {expenseCount} {expenseCount > 1 ? 'expenses': 'expense'} totalling {numeral(expenseTotal / 100).format('$0,0.00')}</h1>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);