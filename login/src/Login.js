import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './Login.css';
import logo from './logo.PNG';

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
      <img src={logo} class="img-responsive center-block" />
          <form className="Form">
          
          <div class="form-group" >
            <input class="form-control glyphicon form-control-lg" type="text"  placeholder="&#57352; Username" />
            </div>
            <div class="form-group">
            <input class="form-control glyphicon form-control-lg" type="password"  placeholder="&#57395; Password" />
            </div>
            <button type="button" class="btn btn-success btn-lg btn-block">Log In</button>
            
          </form>
      </div>
    );
  }
}

 
