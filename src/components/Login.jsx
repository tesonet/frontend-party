import React from 'react';
import { withAlert } from 'react-alert';

import Icon from './Icon';
import InputGroup from './InputGroup';
import TesonetAPI from '../utilities/TesonetAPI';
import bindFunctions from '../utilities/bindFunctions';

import bigLogo from '../images/bigLogo.png';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      username: '',
      loggingIn: false
    };

    bindFunctions(
      this,
      'onUsernameChange',
      'onPasswordChange',
      'onSubmit'
    );
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onSubmit(event) {
    const {onLogin, alert} = this.props;

    event.preventDefault();

    this.setState({loggingIn: true});

    TesonetAPI
      .createToken(this.state.username, this.state.password)
      .then(
        onLogin,
        error => {
          this.setState({loggingIn: false});
          if (error instanceof TesonetAPI.HTTPError) {
            alert.error('Could not log in with provided username and password.');
          } else {
            alert.error('A network error has occured.');
          }
        }
      );
  }

  render() {
    const {username, password, loggingIn} = this.state;

    const submitDisabled = username === '' || password === '' || loggingIn;

    return (
      <div className="login-wrapper">
        <div className="container">
          <div className="login-container">
            <div className="login-inner">
              <img src={bigLogo} alt="testio." />
              <form onSubmit={this.onSubmit}>
                <InputGroup>
                  <Icon icon="fa-user" title="Username" />
                  <input
                    value={username}
                    onChange={this.onUsernameChange}
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    className="form-control"
                  />
                </InputGroup>
                <InputGroup>
                  <Icon icon="fa-lock" title="Password" />
                  <input
                    value={password}
                    onChange={this.onPasswordChange}
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    className="form-control"
                  />
                </InputGroup>
                <button type="submit" disabled={submitDisabled}>
                  {loggingIn ? 'Logging In…' : 'Log In'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert(Login);
