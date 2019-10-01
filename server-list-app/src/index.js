import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";
import "./index.css";
import "babel-polyfill";
import reducers from "./reducers.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);