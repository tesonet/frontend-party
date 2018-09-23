// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { UserIcon, PasswordIcon } from '../Icons/Icons';
import type { LoginActionPayload } from '../../store/actions/LoginAction';

const Form = styled.form`
  margin-top: 50px;
  display: grid;
  justify-items: center;
`;

type LoginFormProps = {
  onSubmit?: (payload: LoginActionPayload) => void,
};

type LoginFormState = {
  username: string,
  password: string,
};

export class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  static defaultProps = {
    onSubmit: null,
  };

  state = {
    username: '',
    password: '',
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(state => ({ ...state, [name]: value }));
  };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    const { onSubmit } = this.props;
    const { username, password } = this.state;
    if (onSubmit) onSubmit({ username, password });
    e.preventDefault();
  };

  render() {
    const { username, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          icon={<UserIcon />}
          onChange={this.handleChange}
          value={username}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          icon={<PasswordIcon />}
          onChange={this.handleChange}
          value={password}
        />
        <Button text="Log In" type="submit" />
      </Form>
    );
  }
}
