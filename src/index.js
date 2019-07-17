import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./_reducers";
import initStorageClient from "./utils/local-storage-client";
import { AUTH_USER } from "./_actions/index";

import Routes from "./components/Routes";

import "./index.css";

const storageClient = initStorageClient();
const middlewareThunk = applyMiddleware(
  thunk.withExtraArgument({ storageClient })
);
const store = createStore(rootReducer, undefined, middlewareThunk);
const token = storageClient.get("token");

if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
