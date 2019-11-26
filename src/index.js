import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import App from "./App";
import authReducer from "./_reducers/authReducer";
import serversReducer from "./_reducers/serversReducer";
import thunk from "redux-thunk";
import "./index.scss";

const allReducers = combineReducers({ authReducer, serversReducer });
const store = createStore(allReducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
