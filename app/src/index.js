import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import BrowserRouter from 'react-router/BrowserRouter';
import './style.scss';
import { signinUserWithToken } from './actions/authentication';
import configureStore from './store/configureStore';
import Login from './pages/Login';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

const store = configureStore();
store.dispatch(signinUserWithToken());

render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="layout">
        <Match exactly pattern="/" component={Main} />
        <Match pattern="/login" component={Login} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'),
);
