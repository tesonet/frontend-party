import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from '../../services/auth.service';
import { setToLocalStorage } from '../../../common/util/localStorage.util';

const Login = ({ history, redirectTo }) => {
    const onFormSubmit = model => {
        login(model).then(({ data }) => {
            setToLocalStorage('session', { token: data.token });
            history.push(redirectTo);
        })
    };
    return <div>
        <LoginForm onSubmit={onFormSubmit} />
    </div>;
};

export default Login;