import React, {Component} from 'react';
import './assets/style/loginForm.scss';
import axios from 'axios';

/* The login form component */
class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: '',
    error: '',
  };
}

componentDidMount() {
  if (localStorage.testio_token) {
           this.props.history.push("/servers");
  }
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
    this.setState({error: 'Username is required'});
  }

  if (!this.state.password) {
    this.setState({error: 'Password is required'});
  }

  const login_data = {
    "username": this.state.username,
    "password": this.state.password
  }

  axios.post('http://playground.tesonet.lt/v1/tokens', login_data, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    localStorage.setItem('testio_token', res.data.token);

    if (localStorage.testio_token) {
      this.props.history.push("/servers");
    }

  }).catch((e) => {
    this.setState({error: 'Wrong username or password'});
  })
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
         <p className="submit-error">{this.state.error}</p>
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
