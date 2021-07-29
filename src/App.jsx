import { Provider } from 'react-redux';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import ROUTES from '@Config/routes';

import store from './store';

import LoginPage from './components/LoginPage/LoginPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.LOGIN} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
