import * as actionTypes from './../actions'

const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case actionTypes.ADD:
            //    respect immutability!
            return {
                ...state,
                counter: state.counter + action.payload
            }
    }
    return state
};

export default counterReducer;
