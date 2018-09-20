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


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        servers: [],
        redirect: false
    };
}
  // componentDidMount() {
  //   const reqData = {
  //     "username": "tesonet",
  //     "password": "partyanimal"
  // };
  //   axios({
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "http://playground.tesonet.lt/v1/servers",
  //     "method": "GET",
  //     "headers": {
  //       "Authorization": "Bearer f9731b590611a5a9377fbd02f247fcdf"
  //   }
  //   }).then(function (response) {
  //     console.log(response.data.map);
  //   })
  //   .catch(function (error) {
  //     alert("Post Error : " +error);
  //   });
  // }
  handleSubmit() {
        this.setState({redirect: true});
  }


  render() {
    return (

      <div className="Login">
          {this.state.redirect &&
           <Redirect to={{
              pathname: '/Servers',
            }} />
          }
      <img src={logo} class="img-responsive center-block" />
          <form className="Form">
            <div class="form-group" >
              <input class="form-control glyphicon form-control-lg" type="text"  placeholder="&#57352; Username" />
            </div>
            <div class="form-group">
              <input class="form-control glyphicon form-control-lg" type="password"  placeholder="&#57395; Password" />
            </div>
            <button type="button" class="btn btn-success btn-lg btn-block" onClick={this.handleSubmit.bind(this)}>Log In</button>
          </form>
        </div>

    );
  }
}

