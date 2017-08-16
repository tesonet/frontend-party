import React, { Component } from 'react';
import { Button, Input } from '../ui';
import PropTypes from 'prop-types';
import { LoginFormStyle } from './style';

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      invalidForm: false
    }
  }

  validateForm() {
    const { username, password } = this.state;
    const data = { username, password };
    const dataObjValues = Object.keys(data).map(
      key => data[key]
    );

    return dataObjValues.every(val => val !== '');
  }

  onSubmit = () => {
    const { onSubmit } = this.props;
    const { username, password } = this.state;
    const data = { username, password };
    const isValid = this.validateForm();

    if (isValid) {
      onSubmit(data);
    } else {
      this.setState({ invalidForm: true });
    }
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  render() {
    const { invalidForm, username, password } = this.state;

    return (
      <form onSubmit={this.onSubmit} className={'login-form'}>
        <Input
          placeholder={'Username'}
          onChange={(val) => this.onChange('username', val)}
          icon={'user'}
          invalid={invalidForm && (!username || username === '' )}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          onChange={(val) => this.onChange('password', val)}
          icon={'lock'}
          invalid={invalidForm && (!password || password === '' )}
        />
        <Button text={'Log In'} onClick={this.onSubmit} />
      </form>
    );
  }
}

export default LoginForm;
