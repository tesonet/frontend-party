import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../_reducers";
import initStorageClient from "./utils/local-storage-client";

import Routes from "./components/Routes";

import "./index.css";

const middlewareThunk = applyMiddleware(
  thunk.withExtraArgument({ storageClient: initStorageClient() })
);

const store = createStore(rootReducer, undefined, middlewareThunk);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
