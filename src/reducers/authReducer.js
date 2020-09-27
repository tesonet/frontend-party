import types from '../types/authTypes';
import retrieveToken from '../utils/retrieveToken';

const initialState = { loggedIn: !!retrieveToken(), submitted: true };

const authentication = (state = initialState, action) => {
    switch (action.type) {
    case types.LOGIN_REQUEST:
        return {
            ...state,
            submitted: false,
        };
    case types.LOGIN_SUCCESS:
        return {
            ...state,
            loggedIn: true,
            submitted: true,
        };
    case types.LOGIN_FAILURE:
        return {
            ...state,
            loggedIn: false,
            submitted: true,
        };
    case types.LOGOUT:
        return {
            ...state,
            loggedIn: false,
        };
    default:
        return state;
    }
};

export default authentication;
