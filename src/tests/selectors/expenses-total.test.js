import getVisibleExpenses from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const data = [];
    const result = getVisibleExpenses(data);
    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const data = [expenses[1]];
    const result = getVisibleExpenses(data);
    expect(result).toEqual(expenses[1].amount);
});

test('Should correctly add up multiple expenses', () => {
    const result = getVisibleExpenses(expenses);
    expect(result).toEqual(114195);
});