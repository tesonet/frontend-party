import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { Login } from './pages/Login';
import { store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);
