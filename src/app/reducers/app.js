import { handleActions } from 'redux-actions';
import { setAuthenticated, setAuthenticationError } from '../actions';

const initialState = {
    authenticated: false,
    authenticationError: ''
};

export default handleActions({
    [setAuthenticated]: (state, { payload }) => ({
        ...state,
        authenticated: payload
    }),
    [setAuthenticationError]: (state, { payload }) => ({
        ...state,
        authenticationError: payload
    })
}, initialState);
