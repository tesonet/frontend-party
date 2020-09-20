import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import actions from '../../actions/authActions';
import testioLogo from '../../assets/logo-testio.svg';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = (values) => dispatch(actions.login(values, history));

    return (
        <div className="login-page">
            <img src={testioLogo} alt="" className="login-logo" />
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

export default memo(Login);
