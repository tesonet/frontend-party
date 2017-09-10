import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { Servers } from './pages/Servers';
import { Login } from './pages/Login';
import { getStore } from './get-store';

const history = createHistory()

const store = getStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/servers" component={Servers}/>
        <Route path="/login" component={Login}/>
      </div> 
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
