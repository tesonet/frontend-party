import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

window.store = store; // TODO: only expose in dev environment

const Home = () => (
  <div>home</div>
);

const Login = () => (
  <div>login</div>
);

const App = () => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  </Provider>
);

export default App;
