import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SwitchUser from './components/switches/SwitchUser';
import SwitchLogin from './components/switches/SwitchLogin';
import auth from './store/actions/auth';
import Token from './modules/Token';
import './App.scss';


function App() {
  const token = new Token();
  const dispatch = useDispatch();
  const activity = useSelector(state => state.activity);
  const isLogged = useSelector(state => state.isLogged);

  switch (activity) {
    case 'LOG_IN':
      (async () => {
        const data = await token.fetch();
        dispatch(auth.loggedIn());
      })();
      break;
    case 'LOG_OUT':
      token.remove();
      dispatch(auth.loggedOut());
      break;
    default:
      const user = token.find('tesonet');
      if (user && !isLogged) dispatch(auth.loggedIn());
      break;
  }

  return (
    <Router>
      <div className="App">
        <div className="app-content">
          {useSelector(state => state.isLogged) ? <SwitchUser /> : <SwitchLogin />}
        </div>
      </div>
    </Router>
  );
}

export default App;