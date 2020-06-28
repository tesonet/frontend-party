import React, { useState } from "react";
import PropTypes from "prop-types";
import { sendHttpRequest } from "../../utils/fetchApi";
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

    return isLoading ? (
        <div>please wait...</div>
    ) : (
        <form className="testio-form" onSubmit={handleSubmit}>
            <input
                name="username"
                type="text"
                placeholder="Username"
                maxLength={32}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                maxLength={32}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Login;

Login.propTypes = {
    setTokenCookie: PropTypes.func.isRequired,
    userHasAuthenticated: PropTypes.func.isRequired
};
