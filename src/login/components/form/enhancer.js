import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import {
    setAuthenticated,
    setAuthenticationError,
    setAuthenticating,
    setAuthTokenToStorage,
    ROUTES
} from '../../../app';

import { setUsernameValidation, setPasswordValidation } from '../../actions';
import { getAuthToken } from '../../repos';
import translations from './index.lang';

const connectState = connect(({ login: { validation }, app }) => ({
    usernameValidationMessage: validation.username,
    passwordValidationMessage: validation.password,
    apiErrorMessage: app.authenticationError,
    isAuthenticating: app.isAuthenticating
}));

const onSubmitHandler = withHandlers({
    onSubmit: ({ dispatch, history, errorMessages }) => (username, password) => {

        const { usernameCannotBeEmpty, passwordCannotBeEmpty } = errorMessages;
        const usernameValidationMessage = username ? '' : usernameCannotBeEmpty;
        const passwordValidationMessage = password ? '' : passwordCannotBeEmpty;

        dispatch(setUsernameValidation(usernameValidationMessage));
        dispatch(setPasswordValidation(passwordValidationMessage));
        dispatch(setAuthenticationError(''));

        if (usernameValidationMessage || passwordValidationMessage) {
            return;
        }

        dispatch(setAuthenticating(true));

        getAuthToken(username, password)
            .then(({ data }) => {
                setAuthTokenToStorage(data.token);
                dispatch(setAuthenticated(true));
                history.push(ROUTES.serversList);
            })
            .catch((error) => {
                dispatch(setUsernameValidation(''));
                dispatch(setPasswordValidation(''));
                dispatch(setAuthenticationError(error.response.data.message));
            })
            .then(() => dispatch(setAuthenticating(false)));
    }
});

export default compose(
    injectIntl,
    withProps(({ intl }) => ({
        errorMessages: {
            usernameCannotBeEmpty: intl.formatMessage(translations.usernameCannotBeEmpty),
            passwordCannotBeEmpty: intl.formatMessage(translations.passwordCannotBeEmpty)
        }
    })),
    withRouter,
    connectState,
    onSubmitHandler
);
