// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LandingLayout } from '../layouts/LandingLayout';
import { MainLayout } from '../layouts/MainLayout';
import { LoginPage } from '../pages/Login';
import { theme } from '../theme';
import { ServersPage } from '../pages/Servers';
import { makeStore } from '../store/store';

const store = makeStore();

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <LandingLayout>
                <LoginPage />
              </LandingLayout>
            )}
          />
          <Route
            path="/servers"
            render={() => (
              <MainLayout>
                <ServersPage />
              </MainLayout>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);
