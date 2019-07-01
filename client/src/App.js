import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import auth from './actions/auth';
import Token from './modules/token';
import SwitchUser from './components/switches/SwitchUser';
import SwitchLogin from './components/switches/SwitchLogin';

const token = new Token();

function App() {
  const dispatch = useDispatch();
  const user = token.find('tesonet');
  if (user) dispatch(auth.loggedIn());
  const isLogged = useSelector(state => state.isLogged);

  console.log({ user, isLogged });

  const logout = () => {
    token.remove();
    dispatch(auth.loggedOut());
  }
  const login = () => {
    dispatch(auth.loggedIn());
  }

  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}

        <div className="app-content">

          <ul>
            <li>
              <Link to="/">root</Link>
            </li>
            <li>
              <Link to="/public">public</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/servers">servers</Link>
            </li>
          </ul>

          {isLogged ? <SwitchUser /> : <SwitchLogin />}

          <code>{isLogged.toString()}</code>
          <button onClick={login}>login</button>
          <button onClick={logout}>logout</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
