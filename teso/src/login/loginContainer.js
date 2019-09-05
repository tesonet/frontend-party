import React, { PureComponent } from 'react';
import LoginForm from './loginFormContainer';
import { getLoginTokenAsync } from '../apiClient/apiClient';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import './loginContainer.css';
import logo from '../images/logo-testio.svg';
import { withAlert } from 'react-alert';

const cookies = new Cookies();

class Login extends PureComponent {
    state = {
        shouldRedirectToServers: false
    }

    onSubmit = async values => {
        try {
            const response = await getLoginTokenAsync(values);
            cookies.set('token', response.token, { path: '/' })
            this.setState(() => ({
                shouldRedirectToServers: true
            }))
        } catch (error) {
            const errorMessage = error.message.toLowerCase() === 'unauthorized' ? 'Wrong username or password' : error.message;
            this.props.alert.error(errorMessage)
        }
    }

    render() {
        if (this.state.shouldRedirectToServers) {
            return <Redirect to='/servers' />
        }

        return (
            <div className="flex content-center flex-wrap h-screen self-center login">
                <div className="m-auto justify-center flex-wrap login-form">
                    <img src={logo} className="w-full login-form__logo" alt="logo"/>
                    <LoginForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default withAlert()(Login);
