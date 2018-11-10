import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import axios from 'axios';

import {
    setUsernameValid,
    setPasswordValid
} from '../actions';

import { setAuthoken, getAuthToken } from '../../app/utils';

const onSubmitHandler = withHandlers({
    onSubmit: ({ dispatch }) => (username, password) => {
        const usernameValid = !!username;
        const passwordValid = !!password;

        dispatch(setUsernameValid(usernameValid));
        dispatch(setPasswordValid(passwordValid));

        if (!usernameValid || !passwordValid) {
            return;
        }

        axios.post('http://playground.tesonet.lt/v1/tokens', {
            username,
            password
        })
            .then(({ data }) => setAuthoken(data.token))
            .catch(() => {
                dispatch(setUsernameValid(false));
                dispatch(setPasswordValid(false));
            });
    }
});

export default compose(
    connect(({ login: { valid } }) => ({
        usernameIsValid: valid.username,
        passwordIsValid: valid.password
    })),
    onSubmitHandler
);
