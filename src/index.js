/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AppContainer } from "react-hot-loader";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import App from "./App";
import authReducer from "./store/reducers/auth.reducers";
import serversReducer from "./store/reducers/servers.reducers";
import "bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ auth: authReducer, servers: serversReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    );
};

render();

if (module.hot) {
    module.hot.accept("./App", render);
}
