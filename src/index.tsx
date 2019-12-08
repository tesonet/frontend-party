import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import App from './App';

import 'simplebar/dist/simplebar.min.css';
import './index.scss';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

declare var module: any;
if (module.hot) {
  module.hot.accept();
}