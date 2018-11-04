import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/bundle.scss";

import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './js/AppRouter';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppRouter />, wrapper) : false;