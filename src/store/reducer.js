const initialState = {
    counter: 0,
    results: []
};
const reducer = (state = initialState, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case 'ADD':
            //    respect immutability!
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'STORE_RESULT':
            //    respect immutability!
            // use concat: like 'push' but returns a new list
            // not adds to current one
            return {
                ...state,
                results: state.results.concat(
                    {
                        id: new Date(),
                        value: state.counter
                    }
                )
            }
        case 'DELETE_RESULT':
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

export default reducer;
