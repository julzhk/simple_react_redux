const initialState = {
    counter: 0
};
const reducer = (state = initialState, action) => {
    console.log(action)
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    return state
};

export default reducer;
