import { handleActions } from 'redux-actions';
import { setAuthenticated } from '../actions';

const initialState = {
    authenticated: false
};

export default handleActions({
    [setAuthenticated]: (state, { payload }) => ({
        ...state,
        authenticated: payload
    })
}, initialState);
