import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import Button from '../Button';
import Input from '../Input';
import { withRouter, RouteComponentProps } from 'react-router';

const Form: React.FC<RouteComponentProps> = props => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

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
    setIsFetching(true);
    const request: Promise<AxiosResponse> = axios.post(
      'http://playground.tesonet.lt/v1/tokens',
      { username, password },
      { headers: { 'Content-Type': 'application/json' } }
    );

    request
      .then(res => {
        setError(null);
        localStorage.setItem('token', res.data.token);
        props.history.replace('/server');
      })
      .catch(err => {
        setError(err);
        setIsFetching(false);
      });
  };

  return (
    <form action="submit" className={'w-full max-w-sm'}>
      {error && !isFetching ? <p>Incorrect credentials</p> : null}
      {isFetching ? <p>Loading...</p> : null}
      <Input placeholder={'Username'} type={'text'} onChange={onInputChange} value={username} />
      <Input placeholder={'Password'} type={'password'} onChange={onInputChange} value={password} />
      <Button
        text="Log In"
        onClick={handleLogin}
        classes={'rounded text-white bg-brand-main w-full hover:bg-brand-hover-1 font-bold'}
        disabled={isFetching}
      />
    </form>
  );
};

export default withRouter(Form);
