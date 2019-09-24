import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormErrorMessage from './FormErrorMessage';
import { loginUser as loginUserAction } from '../actions';
import storage from '../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../constants/token';
import { ReactComponent as Logo } from '../assets/images/logo-testio.svg';
import './LoginForm.scss';

const LoginForm = ({ loginUser, history, serverErrorType }) => {
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({ noUsername: false, noPassword: false });

    const checkAuthentication = key => {
        const isAuthenticated = !!storage.get(key);

        if (isAuthenticated) history.push('/');
    };

    useEffect(() => {
        checkAuthentication(AUTH_TOKEN_KEY);
    }, []);

    const validateInputs = () => {
        const isUsernameEmpty = inputValues.username.length === 0;
        const isPasswordEmpty = inputValues.password.length === 0;

        setFormErrors({
            noUsername: isUsernameEmpty,
            noPassword: isPasswordEmpty
        });

        return isUsernameEmpty || isPasswordEmpty;
    };

    const handleChange = event => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const areEmptyInputs = validateInputs();

        if (areEmptyInputs) return;

        await loginUser({ inputValues });
        checkAuthentication(AUTH_TOKEN_KEY);
    };

    const existingFormErrors = Object.keys(formErrors).filter(key => formErrors[key]);

    const errors = (serverErrorType && [serverErrorType]) || existingFormErrors;

    const hasErrors = errors && errors.length > 0;

    return (
        <div className="login">
            <Logo className="login__logo" />
            <form className="login-form" onSubmit={handleSubmit}>
                {hasErrors && <FormErrorMessage errors={errors} />}
                <i className="login-form__username-icon" />
                <input
                    name="username"
                    className={`login-form__input ${(formErrors.noUsername || serverErrorType) &&
                        'login-form__input--error'}`}
                    type="text"
                    placeholder="Username"
                    value={inputValues.username}
                    onChange={handleChange}
                    maxLength="35"
                />
                <i className="login-form__password-icon" />
                <input
                    name="password"
                    className={`login-form__input ${(formErrors.noPassword || serverErrorType) &&
                        'login-form__input--error'}`}
                    type="password"
                    placeholder="Password"
                    value={inputValues.password}
                    onChange={handleChange}
                    maxLength="35"
                />
                <input className="login-form__button" type="submit" value="Log In" />
            </form>
        </div>
    );
};

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
