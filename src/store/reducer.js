const initialState = {
    counter: 0
};
const reducer = (state = initialState, action) => {

    const delta = {
        'INCREMENT': 1,
        'DECREMENT': -1,
        'ADD': 5,
        'SUBTRACT': -5
    }[action.type]
    if (delta === undefined){
        return state
    }
    return {
        ...state,
        counter: state.counter + delta
    }
};

export default reducer;
