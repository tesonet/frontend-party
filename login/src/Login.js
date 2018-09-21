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
import loginBackground from './loginBackground.png';
import axios from 'axios';
import Servers from './Servers';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        servers: [],
        redirect: false,
        password: '',
        username: ''
    };
}
handleChangeUsername(event) {
  this.setState({username: event.target.value});
}
handleChangePassword(event) {
  this.setState({password: event.target.value});
}
  handleSubmit() {

           axios({
            "async": true,
            "crossDomain": true,
            "url": "http://playground.tesonet.lt/v1/tokens",
            "method": "POST",
            "headers": {
              'content-type':'application/json'
            },
            "data": {
              "username": this.state.username,
              "password": this.state.password
            }
            
            }).then(response => this.setState({redirect: true}))
            .catch(error => {
              this.setState({redirect: false}); 
              alert('incorrect ');
            });
  }


  render() {
    return (

      <div className="Login">
          {this.state.redirect &&
           <Redirect to={{
              pathname: '/Servers',
            }} />
          }
      
          <form className="Form">
          <img src={logo} class="img-responsive center-block" />
            <div class="form-group" >
              <input class="form-control form-control-lg glyphicon" type="text" onChange={this.handleChangeUsername.bind(this)} placeholder="&#57352; Username" />
             
            </div>
            <div class="form-group">
              <input class="form-control form-control-lg glyphicon " type="password" onChange={this.handleChangePassword.bind(this)} placeholder="&#57395; Password" />
            </div>
            <button type="button" class="btn btn-success btn-lg btn-block" onClick={this.handleSubmit.bind(this)}>Log In</button>
          </form>
        </div>

    );
  }
}

