import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import './globalStyles.scss';

if (IS_DEV) {
  window.store = store;
}

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
