import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './Login.css';
import logo from './logo.PNG';
import axios from 'axios';
import Servers from './Servers';
import Login from './Login';

export default class App extends Component {

  render() {
    return (
    <Router>
        <div className="App">
            <Route exact path="/" component={Login}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Servers" component={Servers}/>
        </div>
    </Router>
    );
  }
}

