import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import LoginPresentation from "./Presentation/Login"
import Authentication from "../Utils/Authentication"
import LoginActions from "./State/Actions"

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isAuthenticated = Authentication.isAuthenticated();

        if (isAuthenticated) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <LoginPresentation
                username={this.props.username}
                password={this.props.password}
                isLoading={this.props.isLoading}
                authenticationError={this.props.authenticationError}
                onUsernameChange={this.props.onUsernameChange}
                onPasswordChange={this.props.onPasswordChange}
                onSubmit={this.props.onSubmit}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.Login.username,
        password: state.Login.password,
        isLoading: state.Login.isLoading,
        authenticationError: state.Login.authenticationError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUsernameChange: (username) => {
            dispatch(LoginActions.setUsername(username));
        },
        onPasswordChange: (password) => {
            dispatch(LoginActions.setPassword(password));
        },
        onSubmit: () => {
            dispatch(LoginActions.performAuthentication());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)