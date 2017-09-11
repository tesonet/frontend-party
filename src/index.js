import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import { Servers } from './pages/Servers';
import { Login } from './pages/Login';
import { getStore } from './get-store';
import { loadPersistedToken } from './util/bootstrap';
import { initApi } from './util/api';

const history = createHistory();

const store = getStore(history);

loadPersistedToken(store);
initApi(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/servers" component={Servers} />
        <Route path="/login" component={Login} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
