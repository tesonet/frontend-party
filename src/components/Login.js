import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios/index';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { setAuthToken } from '../actions/init';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoggingIn: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this._usernameClass = '';
    this._passwordClass = '';
  };

  handleInputChange(ev) {
    let { name, value } = ev.target;
    this.setState({ [name]: value });
  }

  handleClick(ev) {
    ev.preventDefault();

    if (this.state.isLoggingIn) {
      return;
    }

    this.setState({ isLoggingIn: true });

    this._usernameClass = '';
    this._passwordClass = '';

    if (this.state.username.length < 2) {
      this._usernameClass = 'validation-failed';
    }

    if (this.state.password.length < 6) {
      this._passwordClass = 'validation-failed';
    }

    if (this._passwordClass || this._usernameClass) {
      this.setState({ isLoggingIn: false });
      return;
    }

    let data = {
      username: this.state.username,
      password: this.state.password
    };

    axios({
      method: 'POST',
      contentType: 'application/json',
      url: 'http://playground.tesonet.lt/v1/tokens',
      data
    })
      .then(res => {
        toast.success('Success. Logging in.');
        let authToken = _.get(res, ['data', 'token']);
        if (authToken) {
          localStorage.setItem('authToken', authToken);
          this.props.setAuthToken(authToken);
        }

        this.setState({isLoggingIn: false});

        this.props.history.push('/servers');

      })
      .catch(err => {

        console.error(err);

        this.setState({ isLoggingIn: false });

        let errorObj = JSON.parse(JSON.stringify(err));
        let status = _.get(errorObj, ['response', 'status']);

        this.setState({ username: '' });
        this.setState({ password: '' });

        switch (true) {
          case /4\d\d/.test(status): {
            return toast.error('Username and password doesn\'t match')
          }
          case /5\d\d/.test(status): {
            return toast.error('Server error. We\'ll be right back');
          }
          default: {
            return toast.error('Unexpected error');
          }
        }

      });
  };

  render() {
    return (
      <div id='login'>
        <div className={'login-form-wrapper'}>

          <div className={'login-form-teso-logo'}/>

          <form className='login-form' onSubmit={this.handleClick}>

            <div className={`input-wrapper ${this._usernameClass}`}>
              <i className='user-icon icon'/>
              <input
                type='text'
                autoFocus
                placeholder={'Username'}
                value={this.state.username}
                onChange={this.handleInputChange}
                name={'username'}
                autoComplete={'off'}
                className={`login-username-field form-input`}
              />
            </div>

            <div className={`input-wrapper ${this._passwordClass}`}>
              <i className='lock-icon icon'/>
              <input
                type='password'
                placeholder={'Password'}
                value={this.state.password}
                onChange={this.handleInputChange}
                name={'password'}
                autoComplete={'off'}
                className={'login-password-field form-input'}
              />
            </div>

            <div className={'button-wrapper'}>
              <button
                className={`login-form-button`}
              >{this.state.isLoggingIn ? `Logging in` : `Log in`}
              </button>
              {this.state.isLoggingIn && <span className={'spinner'}/>}
            </div>

          </form>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    setAuthToken: (authToken) => {
      dispatch(setAuthToken(authToken));
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Login);
