/**
 * app.js
 *
 * Entry file for the application code.
 */
// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';

/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!../public/manifest.json';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './utils/store';
import createRoutes from './utils/routes';

import App from './containers/App';
import { makeSelectLocationState } from './selectors/app';

// Import global styles
import './styles/global-styles';

const initialState = {};
const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
    />
  </Provider>,
  document.getElementById('root')
);

// Install ServiceWorker and AppCache
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
