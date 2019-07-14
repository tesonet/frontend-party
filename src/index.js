import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../_reducers";

import App from "./App";

const middlewareThunk = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, undefined, middlewareThunk);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
