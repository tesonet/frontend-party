import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import globalStyles from './globalStyles.scss'; // eslint-disable-line no-unused-vars

if (__DEV__) {
  window.store = store;
}

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
