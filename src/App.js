import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { getToken } from '@/utils/localStorage';
import LoginPage from '@/pages/Login/components/LoginPage/LoginPage';
import ServersPage from '@/pages/Servers/components/ServersPage/ServersPage';
import store from './store';
import GlobalStyle from './styles';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getToken();
  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/servers" component={ServersPage} />
        <Route path="/" render={() => <Redirect to="/servers" />} />
      </Switch>
    </Router>
  </Provider>
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default App;
