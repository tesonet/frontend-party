import React, { Component } from 'react';
import BEM from './BEM';
import Alert from './Alert';
import { Redirect } from "react-router-dom";

const TESONET_API_AUTH = "http://playground.tesonet.lt/v1/tokens";

class LoginBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAlert: false,
            alertMessage: "Credentials incorrect",
            alertType: "danger",
            redirect: false,
            loading: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();

        this.setState({ showAlert: false, loading: true });

        let username = document.querySelector('input[name="username"]')
        let password = document.querySelector('input[name="password"]')

        if (username.value && password.value) {
            var xhr = new XMLHttpRequest();
    
            xhr.onload = () => {
                let r = JSON.parse(xhr.response)
                
                if (xhr.status == 200) {
                    let token = r.token;
                    localStorage.setItem("token", token);
                    this.setState({ redirect: '/cms/server-list' })    
                } else {
                    this.setState({showAlert: true, alertMessage: r.message, loading: false })
                }
            };
    
            xhr.open("POST", TESONET_API_AUTH, true)
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({ username: username.value, password: password.value}));
        } else {
            alert("Please fill in both username and password!");
        }
    }

    render() {
        const redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to={redirect} />;
        }

        return (
            <BEM name="login-box">
                <div className="login-box__header">
                    <img src="assets/images/logo.png" alt="" />
                </div>
                <form method="post" className="login-box__form">
                    <input type="text" name="username" className="login-box__input login-box__input--text login-box__input--username" placeholder="Username" />
                    <input type="password" name="password" className="login-box__input login-box__input--password" placeholder="Password" />
                    <button onClick={this.onClick} className="login-box__button login-box__button--login">{!this.state.loading ? 'Log In' : 'Loading...' }</button>
                </form>
                { this.state.showAlert ? <Alert type={this.state.alertType}  message={this.state.alertMessage} /> : '' }
            </BEM>
        ) 
    }
}

export default LoginBox;