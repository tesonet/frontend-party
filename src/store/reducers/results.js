import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    data: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RESULTS_START:
            return {
                ...state,            
                loading: true
            };
        case actionTypes.SET_RESULTS_SUCCESS:
            return {
                ...state,
                data: action.data, 
                loading: false
            };
        case actionTypes.SET_RESULTS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default: 
            return state;
    }
};

export default reducer;