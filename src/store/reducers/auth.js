import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    token: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,            
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false,
                error: null
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                error: null,
                loading: false,
                token: null
            };
        default: 
            return state;
    }
};

export default reducer;