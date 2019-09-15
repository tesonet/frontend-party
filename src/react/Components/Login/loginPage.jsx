import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import LogoImage from "../../../express/public/static/img/login/logo.png";
import {api} from "../../../../apis.cfg";
import Warning from "../Modals/Warnings/warning";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'tesonet',
            password: 'partyanimal',
            token: null,
            loading: false,
            error: ''
        };
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserNameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handleUserPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        if (this.state.username && this.state.password) {
            this.login();
        } else {
            this.setState({
              error: 'Username or/and password field are empty.'
            });
        }
    }

    login() {
        this.setState({
            loading: true
        });
        return axios.post(api.auth, {username: this.state.username, password: this.state.password}).then(
            (response) => {
                if (response.data && response.status == 200 && response.data.token) {
                    this.setState({
                        loading: false,
                        token: response.data.token
                    });
                    localStorage.setItem('auth_token', response.data.token);
                    this.props.loginRequest(response.data.token);
                    this.props.history.push('/');
                } else {
                    this.setState({
                        loading: false,
                        error: 'Something gone wrong please try later.'
                    });
                }
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: 'Wrong username or password.'
                });
            })
    }

    render() {
        let warn = '';
        if (this.state.error) {
            warn = <Warning bodyText={this.state.error}/>
        }
        return (
            <div className="login-bg center-items-vertically text-center">
                <div className="login-wrapper">
                    <img src={LogoImage} className="logo" alt="Logo"/>
                    {warn}
                    <div className="input-group">
                                <span className="input-group-addon">
                                     <i className="fa fa-user"></i>
                                </span>
                        <input type="text" className="form-control custom-input input-lg" placeholder="Username"
                               value={this.state.username} onChange={this.handleUserNameChange} ref={this.userName}
                               autoFocus/>
                    </div>
                    <br/>
                    <div className="input-group">
                                <span className="input-group-addon">
                                     <i className="fa fa-lock fa-lg"></i>
                                </span>
                        <input type="password" className="form-control custom-input input-lg"
                               value={this.state.password}
                               onChange={this.handleUserPasswordChange} placeholder="Password"/>
                    </div>
                    <br/>
                    <button type="button" className="btn login-btn btn-lg" onClick={this.handleSubmit}>Log In</button>
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    loginRequest: PropTypes.func
};