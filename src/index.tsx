import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import store from "./store";
import history from "./routes/history";
import "./styles/reset.scss";
import "./styles/main.scss";
import Routes from "./routes";

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
