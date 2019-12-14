import React, { useState } from 'react';

import logo from './img/logo-testio.svg';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    console.log(username, password);
    console.log(e);
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
    </div>
  );
}

export default App;
