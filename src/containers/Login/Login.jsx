import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { handleLogin } from "../../store/actions/auth.actions";
import logo from "../../assets/images/logo-light.svg";
import "./Login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const submitForm = event => {
        event.preventDefault();
        dispatch(handleLogin(username, password));
    };

    return (
        <div className="login-container">
            <img src={logo} className="login-logo" />
            <LoginForm
                onSubmit={submitForm}
                onUsernameChange={setUsername}
                onPasswordChange={setPassword}
            />
        </div>
    );
};

export default Login;
