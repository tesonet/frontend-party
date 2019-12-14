import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import './App.css';
import {Servers} from './Servers';
import {Login} from './Login';
import rootReducer from './reducers/root-reducer';
import routes from './routes';

function App() {

  return (
    <Router>
      <Switch>
          <Route path={routes.login} component={Login} />
          <Route path={routes.servers} component={Servers}/>
      </Switch>
    </Router>
  );
}

const AppWrapped = () => {
  const store = createStore(rootReducer);
  return <Provider store={store}><App/></Provider>
}

export default AppWrapped;
