import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import authService from '../../services/auth.service';
import { setToLocalStorage } from '../../../common/util/localStorage.util';
import Logo from '../../../assets/images/logo.png';
import './Login.scss';

const Login = ({ history, redirectTo }) => {
    const onFormSubmit = model => {
        authService.login(model).then(({ data }) => {
            setToLocalStorage('session', { token: data.token });
            history.push(redirectTo);
        })
    };
    return (
        <div className="Login">
            <div className="container">
                <div className="h-100 justify-content-center align-items-center row">
                    <div className="col-md-4">
                        <div className="Login-logo">
                            <img alt="Logo" src={Logo} />
                        </div>
                        <LoginForm onSubmit={onFormSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
