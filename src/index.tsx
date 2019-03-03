import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { App } from "./App";

const container = document.createElement("div");
container.className = "app";
document.body.appendChild(container);
ReactDOM.render(<App />, container);
