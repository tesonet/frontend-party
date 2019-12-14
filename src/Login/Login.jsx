import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import logo from '../img/logo-testio.svg';
import routes from '../routes';
import { userActions } from '../reducers/current-user';

export const Login = () => {
  const localStorageKey = 'my-token-key';

  const dispatch = useDispatch();

  useEffect(()=>{
    const loadedToken = window.localStorage.getItem(localStorageKey);
    if (loadedToken) {
      dispatch({ type: userActions.setToken, payload: loadedToken });
    }
  }, [dispatch]);

  const token = useSelector(state => state.currentUser.token);

  const login = useCallback(
    (token) => {
      dispatch({ type: userActions.setToken, payload: token });
      window.localStorage.setItem(localStorageKey, token);
    },
    [dispatch]
  );

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
      login(token);

    } catch (ex) {
      console.log(ex)
    }
  }
return (
  <div className="App login">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={e=>{setUsername(e.target.value)}}
        />
        <input
          type="password"
          value={password}
          onChange={e=>{setPassword(e.target.value)}}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </header>
  </div>);
}