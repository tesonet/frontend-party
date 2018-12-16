import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ApiUtil } from '../api/apiUtil.js';
import { setAuthorizationToken } from '../utils/authorization.js';
import '../sass/login.scss';

class Login extends Component {
  state = {
    name: '',
    pass: '',
  };

  handleNameChange = event => {
    this.setState({name: event.target.value});
  }

  handlePassChange = event => {
    this.setState({pass: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login()
  }

  login = () => {
    ApiUtil('/tokens', 'POST',
      { 
        username: this.state.name,
        password: this.state.pass,
      }
    ).then(response => {
      setAuthorizationToken(response);
      this.props.history.push('/servers');
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="login-container row justify-content-center align-items-center">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-form-logo-container">
            <img src="static/images/logotype-testio.png" alt="logo"/>
          </div>
          <div className="form-group input-group login-form-group">
          <object type="image/svg+xml" data="static/images/ico-username.svg">
          </object>
            <input type="text" className="form-control login-form-input"  value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div className="form-group input-group login-form-group">
            <object type="image/svg+xml"data="static/images/ico-lock.svg">
            </object>
            <input type="password" className="form-control login-form-input"  value={this.state.pass} onChange={this.handlePassChange} />
          </div>
          <div className="form-group login-form-group">
            <button type="submit" className="btn login-form-btn">Log In</button>
          </div>
        </form>   
      </div>
    );
  }
}

export default withRouter(Login);