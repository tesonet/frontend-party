import React, { Component } from "react";
import { connect } from "react-redux";
import _get from "lodash/get";
import "./login.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const testioLogo = require("../../images/logo.svg");
const profileIcon = require("../../images/profile.svg");
const passwordIcon = require("../../images/password.svg");

import { loginUser } from "../../store/login/actions";
import { LoginState } from "../../store/login/types";

interface LoginViewState {
    auth: boolean;
    loginUser: (name: string, password: string) => void;
    username: string;
    password: string;
    error: boolean;
}

class Login extends Component<LoginViewState> {
    state = {
        username: "",
        password: "",
    };

    handleChange = (e: any) => {
        const { target } = e;
        const { name, value } = target;

        this.setState({ [name]: value });
    };

    submit = () => {
        const { username, password } = this.state;
        const { loginUser } = this.props;

        if (username && password) {
            loginUser(username, password);
        }
    };

    onEnterPress = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            this.submit();
        }
    };

    render() {
        const { error } = this.props;
        
        return (
            <div className="app-login" onKeyDown={this.onEnterPress}>
                <div className="app-login-container">
                    <img
                        className="app-login-container_image"
                        src={testioLogo}
                        alt="logo"
                    />
                    <InputField
                        name="username"
                        type="text"
                        placeholder="Username"
                        icon={profileIcon}
                        onChange={this.handleChange}
                    />
                    <InputField
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon={passwordIcon}
                        onChange={this.handleChange}
                    />
                    <Button text="Log in" onClick={this.submit} />
                    {error && <p className="app-login-container_error">Invalid Username or Password</p>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: { auth: LoginState }) => ({
    auth: state.auth.authenticated,
    error: state.auth.error
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
