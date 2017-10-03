import moment from 'moment';

import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('Should Not remove expense if Id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

// Should add an expesnse
test('Should add an expesnse', () => {

    const newExpense = {
        note: '',
        description: 'New Expense',
        amount: 1000,
        createdAt: moment(0).subtract(5, 'days').valueOf(),
        id: '4'
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        ...expenses,
        newExpense
    ]);
});

// Should edit an expense
test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'Updated Rent'
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].description).toEqual('Updated Rent');
});

// Should not edit expense if expense not found
test('Should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Updated Rent'
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});