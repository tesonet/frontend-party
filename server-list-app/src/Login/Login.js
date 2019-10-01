import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import LoginPresentation from "./Presentation/Login"
import Authentication from "../Utils/Authentication"
import LoginActions, {LoginActionTypes} from "./State/Actions"

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(username) {
        this.props.dispatch(LoginActions.setUsername(username));
    }

    onPasswordChange(password) {
        this.props.dispatch(LoginActions.setPassword(password));
    }

    onSubmit() {
        this.props.dispatch(LoginActions.performAuthentication());    
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
            onUsernameChange={this.onUsernameChange} 
            onPasswordChange={this.onPasswordChange} 
            onSubmit={this.onSubmit} 
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.Login.username, 
        password: state.Login.password, 
        isLoading: state.Login.isLOading, 
        authenticationError: state.Login.authenticationError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUsernameChange: ownProps.onUsernameChange,
        onPasswordChange: ownProps.onPasswordChange,
        onSubmit: ownProps.onSubmit
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)