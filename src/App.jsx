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
import Container from './Container';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={ROUTES.LOGIN} component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  </Provider>
);

export default App;
