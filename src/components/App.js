// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { LandingLayout } from '../layouts/LandingLayout';
import { MainLayout } from '../layouts/MainLayout';
import { LoginPage } from '../pages/Login';
import { theme } from '../theme';
import { ServersPage } from '../pages/Servers';
import { makeStore } from '../store/store';

/* eslint-disable */
injectGlobal`
  body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`
/* eslint-enable */

const store = makeStore();

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => (
              <LandingLayout>
                <LoginPage />
              </LandingLayout>
            )}
          />
          <Route
            exact
            path="/home"
            render={() => (
              <MainLayout>
                <ServersPage />
              </MainLayout>
            )}
          />
          <Route render={() => <Redirect to={store.getState().loginReducer.isLoggedIn ? '/home' : '/login'} />} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);
