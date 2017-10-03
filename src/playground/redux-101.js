import { createStore } from 'redux';

// Action Generators - Functions that create actions

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// reducers
// - Are pure functions
//      - Output determined only by input
// - Never change 'state' or 'action'

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// arrow function gets called everytime the store changes
// useful to do something when state changes
// subscribe returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// unsubsctibe();

// Actions - object that gets sent to the store

// walk, stop_walking, sit, work, stop_working
// Increment, decrement, reset
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));



