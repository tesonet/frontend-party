import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { BrowserRouter } from "react-router-dom";

import "./main.scss";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById(`root`)
);
