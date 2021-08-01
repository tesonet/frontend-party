import { Provider } from 'react-redux';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import ROUTES from '@Config/routes';

import store from './store';
import Container from './Container';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import LoginPage from './components/LoginPage/LoginPage';
import ServerListPage from './components/ServerListPage/ServerListPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => (
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.MAIN} component={Main} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.SERVER_LIST} component={ServerListPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  </Provider>
);

export default App;
