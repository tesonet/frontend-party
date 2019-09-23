import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormErrorMessage from './FormErrorMessage';
import { loginUser as loginUserAction } from '../actions';
import storage from '../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../constants/token';
import { ReactComponent as Logo } from '../assets/images/logo-testio.svg';
import './LoginForm.scss';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        formErrors: { noUsername: false, noPassword: false }
    };

    componentDidMount() {
        this.checkAuthentication(AUTH_TOKEN_KEY);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async event => {
        const { loginUser } = this.props;
        const { username, password } = this.state;
        event.preventDefault();

        await this.validateInputs(username, password);

        const { formErrors } = this.state;

        if (formErrors.noUsername || formErrors.noPassword) {
            return;
        }

        await loginUser({ username, password });
        this.checkAuthentication(AUTH_TOKEN_KEY);
    };

    checkAuthentication = key => {
        const { history } = this.props;
        const isAuthenticated = !!storage.get(key);

        if (isAuthenticated) history.push('/');
    };

    validateInputs = (username, password) => {
        this.setState({
            formErrors: {
                noUsername: username.length === 0,
                noPassword: password.length === 0
            }
        });
    };

    render() {
        const { username, password, formErrors } = this.state;
        const { serverErrorType } = this.props;

        const existingFormErrors = Object.keys(formErrors).filter(key => formErrors[key]);

        const errors = (serverErrorType && [serverErrorType]) || existingFormErrors;

        const hasErrors = errors && errors.length > 0;

        return (
            <div className="login">
                <Logo className="login__logo" />
                <form className="login-form" onSubmit={this.handleSubmit}>
                    {hasErrors && <FormErrorMessage errors={errors} />}
                    <i className="login-form__username-icon" />
                    <input
                        name="username"
                        className={`login-form__input ${(formErrors.noUsername ||
                            serverErrorType) &&
                            'login-form__input--error'}`}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <i className="login-form__password-icon" />
                    <input
                        name="password"
                        className={`login-form__input ${(formErrors.noPassword ||
                            serverErrorType) &&
                            'login-form__input--error'}`}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input className="login-form__button" type="submit" value="Log In" />
                </form>
            </div>
        );
    }
}

LoginForm.defaultProps = {
    serverErrorType: null
};

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    serverErrorType: PropTypes.string
};

const mapStateToProps = state => {
    return { serverErrorType: state.login.errorType };
};

const mapDispatchToProps = dispatch => ({
    loginUser: userInfo => dispatch(loginUserAction(userInfo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginForm));
