import React, { Component } from 'react';
import LoginForm from './containers/LoginForm';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="login-page">
            	<div className="container">
            		<div className="row justify-content-center align-items-center">
	        			<LoginForm />
            		</div>
            	</div>
        	</div>

        );
    }
}

export default Login;