import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import { loginUser as loginUserAction } from '../../actions/login';
import storage from '../../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../../constants/token';
import { FORM_ERROR_TYPES } from '../../constants/formErrorTypes';
import { ReactComponent as Logo } from '../../assets/images/logo-testio-light.svg';
import { ReactComponent as Spinner } from '../../assets/images/spinner.svg';
import './LoginForm.scss';

const LoginForm = ({ history, loginUser, loading, serverErrorType }) => {
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState([]);

    const checkAuthentication = key => {
        const isAuthenticated = !!storage.get(key);

        if (isAuthenticated) history.push('/');
    };

    const validateInputs = () => {
        const isUsernameEmpty = inputValues.username.length === 0;
        const isPasswordEmpty = inputValues.password.length === 0;

        setFormErrors([
            ...(isUsernameEmpty ? [FORM_ERROR_TYPES.NO_USERNAME] : []),
            ...(isPasswordEmpty ? [FORM_ERROR_TYPES.NO_PASSWORD] : [])
        ]);

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

        try {
            await loginUser(inputValues);
            checkAuthentication(AUTH_TOKEN_KEY);
        } catch (e) {
            console.log(e);
        }
    };

    const errors = (!!serverErrorType && [serverErrorType]) || formErrors;
    const hasErrors = errors && errors.length > 0;

    return (
        <div className="login">
            <Logo className="login__logo" />
            <form className="login-form" onSubmit={handleSubmit}>
                {hasErrors && <FormErrorMessage errors={errors} />}
                <i className="login-form__username-icon" />
                <input
                    name="username"
                    className={`login-form__input${
                        errors.includes(FORM_ERROR_TYPES.NO_USERNAME) || !!serverErrorType
                            ? ' login-form__input--error'
                            : ''
                    }`}
                    type="text"
                    placeholder="Username"
                    value={inputValues.username}
                    onChange={handleChange}
                    maxLength="35"
                />
                <i className="login-form__password-icon" />
                <input
                    name="password"
                    className={`login-form__input${
                        errors.includes(FORM_ERROR_TYPES.NO_PASSWORD) || !!serverErrorType
                            ? ' login-form__input--error'
                            : ''
                    }`}
                    type="password"
                    placeholder="Password"
                    value={inputValues.password}
                    onChange={handleChange}
                    maxLength="35"
                />
                <button className="login-form__button" type="submit" disabled={loading}>
                    {loading ? <Spinner className="login-form__spinner" /> : 'Log In'}
                </button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    loginUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    serverErrorType: PropTypes.string
};

LoginForm.defaultProps = {
    serverErrorType: null
};

const mapStateToProps = state => ({
    serverErrorType: state.login.errorType,
    loading: state.login.loading
});

const mapDispatchToProps = {
    loginUser: userInfo => loginUserAction(userInfo)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
