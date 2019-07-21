import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";

//Components.
import App from "./components/App/App";

//Styling.
import "normalize.css";
import "./scss/_main.scss";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
