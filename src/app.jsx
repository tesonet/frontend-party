import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import globalStyles from './app.scss'; // eslint-disable-line no-unused-vars

window.store = store; // TODO: only expose in the dev environment

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
