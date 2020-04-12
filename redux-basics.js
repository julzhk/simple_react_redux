const redux = require('redux');
const createStore = redux.createStore
//RUN in node

const initialState = {
    counter: 0
}

//REDUCER
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        // must update state IMMUTABLY!
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        // must update state IMMUTABLY!
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
}

// STORE

const store = createStore(rootReducer);
console.log(store.getState());
//1

// SUBSCRIPTION
store.subscribe(() => {
    console.log('[SUBSCRIPTION', store.getState())
})


// ACTION DISPATCHER
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState());
// 11
