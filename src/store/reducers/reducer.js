import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
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
                loading: false
            };
        case actionTypes.AUTH_FAIL:
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