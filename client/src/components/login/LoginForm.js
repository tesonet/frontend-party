import React, { Component } from 'react';
import { Button, Input } from '../ui';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  validateForm() {
    const data = this.state;
    return Object.values(data).every(val => val !== '');
  }

  onSubmit() {
    const { onSubmit } = this.props;
    const data = this.state;
    const isValid = this.validateForm();

    if (isValid) {
      onSubmit(data);
    } else {
      console.log('set invalid stuff');
    }
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  render() {
    return (
      <form>
        <Input
          placeholder={'Username'}
          onChange={(val) => this.onChange('username', val)}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          onChange={(val) => this.onChange('password', val)}
        />
        <Button text={'Login'} onClick={() => this.onSubmit()} />
      </form>
    );
  }
}

export default LoginForm;
