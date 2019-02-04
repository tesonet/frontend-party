import './styles/styles.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Router } from 'react-router-dom';
import history from './utils/history';

// @ts-ignore
const Promise: any = Promise ? Promise : require('es6-promise-promise');
const app: HTMLElement = document.querySelector('#app');

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  app
);
