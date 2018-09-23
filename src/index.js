import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App.js";
import configureStore from "./utils/configureStore.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/global.css";

const store = configureStore();

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
