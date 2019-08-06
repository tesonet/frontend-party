import React, { Component } from 'react';
import LoginBox from './LoginBox';
import { Redirect } from 'react-router-dom';
import BEM from './BEM';

import '../login.css'; // webpack does not handle scss files! use OS tools

class LoginPage extends Component {

    constructor(props) {
        super(props);

        var token = localStorage.getItem("token");

        if (token) {
            this.state = { authorized: true }
        } else {
            this.state = { authorized: false }
        }
    }

    render() {
        const redirect  = this.state.authorized;

        if (redirect) {
            return <Redirect to='/cms/server-list'/>;
        }

        return <BEM name="login-page">
            <LoginBox />
            <div className="overlay overlay--branded"></div>
        </BEM>
    }
}

export default LoginPage; 