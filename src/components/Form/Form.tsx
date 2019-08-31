import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import Button from '../Button';
import Input from '../Input';
import { withRouter, RouteComponentProps } from 'react-router';

const Form: React.FC<RouteComponentProps> = props => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onInputChange = (input: string, type: string) => {
    switch (type) {
      case 'text':
        setUserName(input);
        break;
      case 'password':
        setPassword(input);
        break;
      default:
        console.warn('input type not found');
        break;
    }
  };

  const handleLogin = () => {
    const request: Promise<AxiosResponse> = axios.post(
      'http://playground.tesonet.lt/v1/tokens',
      {
        username: username,
        password: password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    request
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.replace('/server');
      })
      .catch(err => {
        // @TODO display error message
        console.log(err);
      });
  };

  return (
    <form action="submit" className={'w-full max-w-sm'}>
      <Input placeholder={'Username'} type={'text'} onChange={onInputChange} value={username} />
      <Input placeholder={'Password'} type={'password'} onChange={onInputChange} value={password} />
      <Button text="Log In" onClick={handleLogin} />
    </form>
  );
};

export default withRouter(Form);
