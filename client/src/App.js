import React, { Component } from 'react';
import { LoginScreen } from './screens/login';
import { ServersScreen } from './screens/servers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { ApiMiddleware } from './utils';
import * as reducers from "./reducers";

const middlewares = [thunk, ApiMiddleware('')];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
  }
}

export default App;
