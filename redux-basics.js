const redux = require('redux');
const createStore = redux.createStore
//RUN in node

const initialState = {
    counter: 0
}

//REDUCER
const rootReducer = (state = initialState, action) => {
    //minimal implementation
    return state
}

// STORE

const store = createStore(rootReducer);
console.log(store.getState())


// ACTION DISPATCHER

// SUBSCRIPTION