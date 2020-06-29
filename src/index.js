import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "./main.scss";

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById(`root`)
);
