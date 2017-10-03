import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
})

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
});

test('Should render ExpenseListFilters with alt date correctly', () => {
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot()
});

// Should handle text change spy
test('Should handle text change', ()=> {
    const value = 'test';
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: value
        }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


// should sort by date spy
test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    })

    expect(sortByDate).toBeCalled();
});

// should sort by amount spy
test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    })

    expect(sortByAmount).toBeCalled();
});

// should handle date changes spy
test('should handle date changes', () => {
    const newStartDate = moment(0).subtract(5, 'days');
    const newEndDate = moment(0).add(5, 'days');
    const data = { 
        startDate: newStartDate, 
        endDate: newEndDate 
    };

    wrapper.find('DateRangePicker').prop('onDatesChange')(data)

    expect(setStartDate).toHaveBeenCalledWith(newStartDate);
    expect(setEndDate).toHaveBeenCalledWith(newEndDate);
});

// should handle data focus changes - asset about state
test('should handle data focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});