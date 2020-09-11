import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { getToken } from '@/utils/localStorage';
import store from './store';
import GlobalStyle from './styles';
import LoginPage from '@/pages/Login/components/LoginPage/LoginPage';
import ServersPage from '@/pages/Servers/components/ServersPage/ServersPage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getToken();
  return (
    <Route {...rest} render={props =>
      token ? <Component {...props} /> : <Redirect to="/login" />
    }
    />
  )
};

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/servers" component={ServersPage} />
          <Route path="/" render={() => <Redirect to="/servers" />} />
        </Switch>
      </Router >
    </Provider >
  )
}

export default App;
