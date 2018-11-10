import { handleActions } from 'redux-actions';

import { setUsernameValid, setPasswordValid } from './actions';

const initialState = {
    valid: {
        username: true,
        password: true
    }
};

export default handleActions({
    [setUsernameValid]: (state, { payload }) => ({
        ...state,
        valid: {
            ...state.valid,
            username: payload
        }
    }),
    [setPasswordValid]: (state, { payload }) => ({
        ...state,
        valid: {
            ...state.valid,
            password: payload
        }
    })
}, initialState);
