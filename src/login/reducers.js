import { handleActions } from 'redux-actions';

import { setUsernameValidation, setPasswordValidation } from './actions';

const initialState = {
    validation: {
        username: '',
        password: ''
    }
};

export default handleActions({
    [setUsernameValidation]: (state, { payload }) => ({
        ...state,
        validation: {
            ...state.validation,
            username: payload
        }
    }),
    [setPasswordValidation]: (state, { payload }) => ({
        ...state,
        validation: {
            ...state.validation,
            password: payload
        }
    })
}, initialState);
