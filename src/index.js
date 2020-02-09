import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import store from "./store";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,700");
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fragment>
    <Normalize />
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  rootElement
);
