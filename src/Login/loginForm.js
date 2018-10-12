import React, {Component} from 'react';
import './assets/style/loginForm.scss';

/* The login form component */
class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    username: "",
    password: "",
    error: ""
  };
}

/*Tracking username input value and setting it in to state*/
handleUsernameChange = e => {
  this.setState({username: e.target.value});
};

/*Tracking password input value and setting it in to state*/
handlePasswordChange = e => {
  this.setState({password: e.target.value});
}

/* Handling form submit  after button or enter click*/
handleLogin = e => {
  e.preventDefault();

  if (!this.state.username) {
    return this.setState({error: 'Username is required'});
  }

  if (!this.state.password) {
    return this.setState({error: 'Password is required'});
  }

  return this.setState({error: ''});
}

  render() {
    return (<div className="login-form">
      <form  onSubmit={this.handleLogin}>
        <div className="input-field-container">
          <span className="icons fa fa-user"></span>

          <input className="login-input-field"
                 id="user-name-input"
                 placeholder="Username"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleUsernameChange}
          />

        </div>

        <div className="input-field-container">
          <span className="icons fa fa-lock"></span>

          <input className="login-input-field"
                  id="user-name-input"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
          />
        </div>
        {
         this.state.error &&
         <p className="submit-error" onClick={this.dismissError}>{this.state.error}</p>
       }

        <input type="submit"
               value="Log in"
               className="btn login-input-field login-button"
        />


      </form>

    </div>);
  }
}

export default LoginForm;
