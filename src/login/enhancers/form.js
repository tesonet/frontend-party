import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { setAuthTokenToStorage } from '../../app/utils';
import { setAuthenticated, setAuthenticationError } from '../../app/actions';
import { setUsernameValidation, setPasswordValidation } from '../actions';
import { getAuthToken } from '../repos';

const USERNAME_CANNOT_BE_EMPTY = 'Username cannot be empty';
const PASSWORD_CANNOT_BE_EMPTY = 'Password cannot be empty';

const onSubmitHandler = withHandlers({
    onSubmit: ({ dispatch, history }) => (username, password) => {
        const usernameValidationMessage = username ? '' : USERNAME_CANNOT_BE_EMPTY;
        const passwordValidationMessage = password ? '' : PASSWORD_CANNOT_BE_EMPTY;

        dispatch(setUsernameValidation(usernameValidationMessage));
        dispatch(setPasswordValidation(passwordValidationMessage));
        dispatch(setAuthenticationError(''));

        if (usernameValidationMessage || passwordValidationMessage) {
            return;
        }

        getAuthToken(username, password)
            .then(({ data }) => {
                setAuthTokenToStorage(data.token);
                dispatch(setAuthenticated(true));
                history.push('/servers-list');
            })
            .catch((error) => {
                dispatch(setUsernameValidation(''));
                dispatch(setPasswordValidation(''));
                dispatch(setAuthenticationError(error.response.data.message));
            });
    }
});

export default compose(
    withRouter,
    connect(({ login: { validation }, app }) => ({
        usernameValidationMessage: validation.username,
        passwordValidationMessage: validation.password,
        apiErrorMessage: app.authenticationError
    })),
    onSubmitHandler
);
