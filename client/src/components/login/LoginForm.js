import React, { Component } from 'react';
import { Button, Input } from '../ui';
import PropTypes from 'prop-types';
import { LoginFormStyle } from './style';

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
    const dataObjValues = Object.keys(data).map(
      key => data[key]
    );

    return dataObjValues.every(val => val !== '');
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
      <form onSubmit={() => this.onSubmit()} className={'login-form'}>
        <Input
          placeholder={'Username'}
          onChange={(val) => this.onChange('username', val)}
          icon={'user'}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          onChange={(val) => this.onChange('password', val)}
          icon={'lock'}
        />
        <Button text={'Log In'} onClick={() => this.onSubmit()} />
      </form>
    );
  }
}

export default LoginForm;
