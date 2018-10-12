import React, {Component} from 'react';
import './assets/style/loginForm.scss';

/*
The login component with usernamer, passsword inputs and login button
*/
class LoginForm extends Component {
  render() {
    return (<div className="login-form">
      <div className="input-field-container">
        <span className="icons fa fa-user"></span>
        <input className="login-input-field" id="user-name-input" placeholder="Username"/>
      </div>
      <div className="input-field-container">
        <span className="icons fa fa-lock"></span>
        <input className="login-input-field" id="user-name-input" placeholder="Password"/>
      </div>
      <button className="btn login-input-field login-button">Log In</button>
    </div>);
  }
}

export default LoginForm;
