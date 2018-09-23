// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LandingLayout } from '../layouts/LandingLayout';
import { MainLayout } from '../layouts/MainLayout';
import { LoginPage } from '../pages/Login';
import { theme } from '../theme';
import { ServersPage } from '../pages/Servers';

export const App = () => (
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
);
