import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { LoginInput } from '../components/LoginInput';
import { LoginButton } from '../components/LoginButton';
import { LoginError } from '../components/LoginError';
import { Login } from '../../../api/login';
import { setItem, getItem } from '../../../utils/localStorageHelpers'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToServers: false,
            formErrorMessage: ''
        }
    }

    componentWillMount() {
        // Try to redirect to servers list if already have auth token
        if (getItem('token')) {
            this.setState({ redirectToServers: true })
        }
    }

    submitLoginForm = () => {
        Login(this.state).then((result) => {
            setItem('token', result.token);
            this.setState({ redirectToServers: true });
        }).catch(() => {
            this.setState({ formErrorMessage: 'Invalid username or password' })
            this.clearUserData();
        })
    }

    clearUserData() {
        this.setState({ username: '' })
        this.setState({ password: '' })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        if (this.state.redirectToServers) {
            return <Redirect to='/servers' />
        }
        return (
            <div>
                <LoginInput value={this.state.username} handleChange={this.handleInputChange} name='username' type='text'/>
                <LoginInput value={this.state.password} handleChange={this.handleInputChange} name='password' type='password'/>
                <LoginError errorMessage={this.state.formErrorMessage}/>
                <LoginButton handleClick={this.submitLoginForm} label="Submit"/>
            </div>
        );
    }
}

export default LoginForm;