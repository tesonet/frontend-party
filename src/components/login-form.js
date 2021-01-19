import React, {useState} from "react";
import {connect} from "react-redux";
import styled from 'styled-components';

import LoginInput from "../components/login-input";
import LoginButton from "../components/login-button";
import {setLogged} from "../redux/actions";
import {login} from "../api/login";
import LoginError from "../components/login-error";
import {device_max_width} from "../config/device-breakpoints";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    @media only screen and ${device_max_width.mobileL} {
         width: 100%;
    }
  `;

export const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            login({username, password})
                .then(json => {
                    props.setLogged(true);
                    localStorage.setItem("token", json.token);
                })
                .catch(() => {
                    setPassword("");
                    setError("Invalid credentials");
                });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <LoginInput label='Username' value={username} onChange={setUsername}/>
            <LoginInput label='Password' value={password} onChange={setPassword}/>
            <LoginError error={error}/>
            <LoginButton/>
        </Form>
    );
};

export default connect(
    null,
    {setLogged}
)(LoginForm);
