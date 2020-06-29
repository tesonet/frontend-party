import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm/LoginForm";
import { sendHttpRequest } from "../../utils/fetchApi";

const LoginPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Login = ({ setTokenCookie, userHasAuthenticated }) => {
    const [isLoading, setIsLoading] = useState(false);

    const sendData = (body) => {
        setIsLoading(true);
        sendHttpRequest(`post`, `https://playground.tesonet.lt/v1/tokens`, body)
            .then((response) => {
                setTokenCookie(response.token);
                userHasAuthenticated(true);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                userHasAuthenticated(false);
                setIsLoading(false);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            username: e.target[0].value,
            password: e.target[1].value
        };
        sendData(body);
    };

    return (
        <LoginPage>
            {!isLoading ? (
                <LoginForm handleSubmit={handleSubmit} />
            ) : (
                <div>please wait...</div>
            )}
        </LoginPage>
    );
};

export default Login;

Login.propTypes = {
    setTokenCookie: PropTypes.func.isRequired,
    userHasAuthenticated: PropTypes.func.isRequired
};
