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
  /*
  Checking if token is into localstorage.
  If it is, just redirects to servers route.
  */
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

/* Handling form submit  after button or enter click.
   It runs login function if username and password fields are filled .
*/
handleLogin = e => {
  e.preventDefault();
  if (!this.state.username) {
    this.setState({error: 'Username is required'});
  } else if (!this.state.password) {
    this.setState({error: 'Password is required'});
  } else {
    this.login();
  }
}

/*Posting username and password to get autentification token*/
login = () => {
  const login_data = {
    "username": this.state.username,
    "password": this.state.password
  }
  axios.post('http://playground.tesonet.lt/v1/tokens', login_data, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    /*Saving token into localstorage */
    localStorage.setItem('testio_token', res.data.token);
    /*Checking if token is into localstorage. If it is, redirect to servers route*/
    if (localStorage.testio_token) {
      this.props.history.push("/servers");
    }
  }).catch((e) => {
    /*Server error handling*/
    const error_code = e.response.status
    if (error_code === 401) {
      /* 401 - Unautorized */
      this.setState({error: 'Wrong username or password'});
    } else {
      /* If you get some other error code */
      this.setState({error: 'Internal server error'});
    }
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
