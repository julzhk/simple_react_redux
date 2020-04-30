export const ADD = 'ADD'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'


export const increment = (n) => {
    return {
        type: ADD,
        payload: n
    }
};
export const storeResult = (n) => {
    //{type: actionTypes.STORE_RESULT,
    // result:result}
    return {
        type: STORE_RESULT,
        result: n
    }
};
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        payload: null,
        resultElementId: id
    }
};
