import React from 'react';

import LoginForm from '../LoginForm/LoginForm';

import './LoginPage.scss';

const LoginPage = props => {
    return (
        <div className="login-page">
            <LoginForm {...props} />
        </div>
    );
};

export default LoginPage;
