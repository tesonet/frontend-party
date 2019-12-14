import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import logo from '../img/logo-testio.svg';
import usernameLogo from '../img/username-logo.svg';
import passwordLogo from '../img/password-logo.svg';

import routes from '../routes';
import useToken from '../hooks/use-token';

import './Login.css';

export const Login = () => {

  const {token, setToken} = useToken();

  const [username, setUsername] = useState('tesonet');
  const [password, setPassword] = useState('partyanimal');
  const [submitted, setSubmitted] = useState(false);

  if (token) {
    return <Redirect to={routes.servers} />
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = async (e) => {
    setSubmitted(true);
    try {
      const response = await fetch('http://playground.tesonet.lt/v1/tokens', {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password}),
        method: 'POST',
        mode: 'cors',
      });
      const { token } = await response.json();
      setToken(token);

    } catch (ex) {
      console.log(ex)
    }
  }
return (
  <div className="App login">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-row">
          <img src={usernameLogo} alt="logo" />
          <input
            type="text"
            value={username}
            onChange={e=>{setUsername(e.target.value)}}
          />
        </div>
        <div className="form-row">
          <img src={passwordLogo} alt="logo" />
          <input
            type="password"
            value={password}
            onChange={e=>{setPassword(e.target.value)}}
          />
        </div>
        <button
          onClick={handleLogin}
          className="submit-button"
        >Login</button>
      </form>
    </header>
  </div>);
}