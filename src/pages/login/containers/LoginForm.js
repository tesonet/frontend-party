import React, { Component } from 'react';
import { LoginInput } from '../components/LoginInput'
import { LoginButton } from '../components/LoginButton'
import { LoginError } from '../components/LoginError'
import { Login } from '../../../api/login'
import { setItem } from '../../../utils/localStorageHelpers'

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            formErrorMessage: ''
        }
    }

    submitLoginForm = () => {
        Login(this.state).then((result) => {
            setItem('token', result.token);
        }).catch(() => {
            this.setState({formErrorMessage: 'Invalid username or password'})
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