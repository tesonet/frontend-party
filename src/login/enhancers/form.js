import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { setAuthTokenToStorage } from '../../app/utils';
import { setAuthenticated } from '../../app/actions';
import { setUsernameValid, setPasswordValid } from '../actions';
import { getAuthToken } from '../repos';

const onSubmitHandler = withHandlers({
    onSubmit: props => (username, password) => {
        const usernameValid = !!username;
        const passwordValid = !!password;

        props.dispatch(setUsernameValid(usernameValid));
        props.dispatch(setPasswordValid(passwordValid));

        if (!usernameValid || !passwordValid) {
            return;
        }

        getAuthToken(username, password)
            .then(({ data }) => {
                setAuthTokenToStorage(data.token);
                props.dispatch(setAuthenticated(true));
                props.history.push('/servers-list');
            })
            .catch(() => {
                props.dispatch(setUsernameValid(false));
                props.dispatch(setPasswordValid(false));
            });
    }
});

export default compose(
    withRouter,
    connect(({ login: { valid } }) => ({
        usernameIsValid: valid.username,
        passwordIsValid: valid.password
    })),
    onSubmitHandler
);
