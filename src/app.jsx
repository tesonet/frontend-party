import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

window.store = store; // TODO: only expose in the dev environment

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
