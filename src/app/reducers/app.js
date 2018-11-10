import { handleActions } from 'redux-actions';
import { setAuthenticated, setAuthenticationError, setAuthenticating } from '../actions';

const initialState = {
    authenticated: false,
    authenticationError: '',
    isAuthenticating: false
};

export default handleActions({
    [setAuthenticated]: (state, { payload }) => ({
        ...state,
        authenticated: payload
    }),
    [setAuthenticationError]: (state, { payload }) => ({
        ...state,
        authenticationError: payload
    }),
    [setAuthenticating]: (state, { payload }) => ({
        ...state,
        isAuthenticating: payload
    })
}, initialState);
