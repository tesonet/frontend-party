import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/GlobalStyle';
import Login from './pages/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import ServerList from './pages/ServerList';
import theme from '../theme';
import { Provider } from 'react-redux';
import store from '../store';
import CheckIfLoggedIn from './utils/CheckIfLoggedIn';

function App() {
  return (
    <Provider store={store}>
      <CheckIfLoggedIn>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <ProtectedRoute exact path="/" component={ServerList} />
              <Route exact path="/login" component={Login} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </CheckIfLoggedIn>
    </Provider>
  );
}

export default hot(App);
