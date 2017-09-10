import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import { Servers } from './pages/Servers';
// import { Login } from './pages/Login';
import { store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <Servers />
  </Provider>,
  document.getElementById('root')
);
