import React from 'react';
import './assets/style/loginWindow.scss';
import LoginForm from './loginForm';
import Logo from './assets/images/logo.png';

/*The main component for login window*/
const LoginWindow = (props) => {
    return (<div className="login-window">
      <div className="login-window-container">
      <div className="img-container">
        <img src={Logo} className="logo" alt="logo"/>
        </div>
        <LoginForm history={props.history}/>
      </div>
    </div>);
}

export default LoginWindow;
