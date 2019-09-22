import React from 'react';

import { ReactComponent as Logo } from '../assets/images/logo-testio.svg';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className="login">
            <Logo className="login__logo" />
            <form className="login-form">
                <input className="login-form__username" type="text" placeholder="Username" />
                <input className="login-form__password" type="password" placeholder="Password" />
                <input className="login-form__button" type="submit" value="Log In" />
            </form>
        </div>
    )
};

export default LoginForm;