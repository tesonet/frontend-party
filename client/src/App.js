import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SwitchUser from './components/switches/SwitchUser';
import SwitchLogin from './components/switches/SwitchLogin';
import Token from './modules/Token';
import auth from './store/actions/auth';
import net from './modules/net';
import './App.scss';

const App = () => {
  const token = new Token();
  const dispatch = useDispatch();
  const activity = useSelector(state => state.activity);
  const isLogged = useSelector(state => state.user.isLogged);
  const username = useSelector(state => state['login:username']);
  const password = useSelector(state => state['login:password']);

  switch (activity) {
    case 'LOG_IN':
      (async () => {
        if (!isLogged) {
          const user = await net.login(username, password);
          if (user.token) {
            token.save(user);
            dispatch(auth.loggedIn(user));
          }
          else if (user.status) {
            dispatch(auth.loginError(true));
            setTimeout(() => dispatch(auth.loginError(false)), 400);
          }
        }
      })();
      break;
    case 'LOG_OUT':
      if (isLogged) {
        token.remove();
        dispatch(auth.username(''));
        dispatch(auth.password(''));
        dispatch(auth.loggedOut());
      }
      break;
    default:
      const user = token.find('tesonet');
      if (user && !isLogged) dispatch(auth.loggedIn(user));
      break;
  }

  return (
    <Router>
      <div className="App">
        {useSelector(state => state.user.isLogged) ? <SwitchUser /> : <SwitchLogin />}
      </div>
    </Router>
  );
}

export default App;