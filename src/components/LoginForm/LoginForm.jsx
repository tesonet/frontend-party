import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import userIcon from "../../assets/icons/ico-user.png";
import passwordIcon from "../../assets/icons/ico-lock.png";
import './LoginForm.scss';

const LoginForm = ({ submit, error }) => {
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        submit({ username, password });
    };

    return (
        <form className="login-form" onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
                <img alt="username" className="login-icon" src={userIcon} />
                <input
                    type="text"
                    className={`form-control login-username ${error ? "form-invalid" : ""}`}
                    onChange={e => setUserame(e.target.value)}
                    value={username}
                    required
                    placeholder="Username" />
            </div>
            <div className="form-group">
                <img alt="password" className="login-icon" src={passwordIcon} />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={`form-control login-password ${error ? "form-invalid" : ""}`}
                    required
                    placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block login-button" onSubmit={e => handleSubmit(e)}>Log In</button>
        </form>
    )
}

LoginForm.defaultProps = {
    error: false
};

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    error: PropTypes.bool
}

export default LoginForm;