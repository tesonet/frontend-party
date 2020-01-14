import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App";
import "./index.scss";

ReactDOM.render(<App />, document.getElementById("content"));
