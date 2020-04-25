import * as actionTypes from './../actions'
const initialState = {
    results: []
};
const resultReducer = (state = initialState, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            //    respect immutability!
            // use concat: like 'push' but returns a new list
            // not adds to current one
            return {
                ...state,
                results: state.results.concat(
                    {
                        id: new Date(),
                        value: action.result
                    }
                )
            }
        case actionTypes.DELETE_RESULT:
            //delete items from list immutably:
            const updatedArray = state.results.filter(
                (ele, indx) => (ele.id !== action.resultElementId)
            )
            return {
                ...state,
                results: updatedArray
            }
    }
    return state
};

export default resultReducer;
