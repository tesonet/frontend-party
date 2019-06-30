import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from './actions/auth';

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <code>{isLogged.toString()}</code>
        <button onClick={() => dispatch(signIn())}>login</button>
      </header>
    </div>
  );
}

export default App;
