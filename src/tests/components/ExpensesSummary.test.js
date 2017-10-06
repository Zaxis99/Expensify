import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should correctly render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expesnseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expesnseCount={2} expensesTotal={235123456}/>);
    expect(wrapper).toMatchSnapshot();
});