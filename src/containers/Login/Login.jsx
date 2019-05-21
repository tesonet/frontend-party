import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import GetToken from '../../services/TokenService';
import logo from '../../assets/images/logo-light.png'
import './Login.scss';

const Login = ({ history }) => {
    const [error, setError] = useState(false);

    const handleSubmit = (user) => {
        GetToken({ username: user.username, password: user.password }).then(result => {
            if (result.token) {
                localStorage.setItem('token', result.token);
                history.push('/list');
            } else {
                setError(true);
                alert(result.message)
            }
        })
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <img alt="Logo" src={logo} className="login-logo" />
                <LoginForm submit={handleSubmit} error={error} />
            </div>

        </div>
    )
}

export default Login;
