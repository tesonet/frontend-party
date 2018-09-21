import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './Servers.css';
import logoDark from './logoDark.PNG';
import axios from 'axios';

export default class Servers extends Component {
    constructor(props) {
      super(props);
      this.state = {
          servers: []
      };
  }
  handleLogout() {
    localStorage.removeItem('AccessToken');
  }
  
  componentDidMount() {
    axios({
       "async": true,
       "crossDomain": true,
       "url": "http://playground.tesonet.lt/v1/servers",
       "method": "GET",
       "headers": {
         "Authorization": this.props.location.token || localStorage.getItem('AccessToken')
     }})
         .then(response => {
             const servers = response.data;
             this.setState({servers});
         })
     }

  render() {

    return (
        <div>

            <img src={logoDark} />
            <span id="Logout" onClick={this.handleLogout.bind(this)}> <span class="glyphicon glyphicon-log-out"></span> Logout</span>
            <table class="table">
            <thead class="thead-light">
                <tr >
                    <th scope="col">SERVER</th>
                    <th scope="col">DISTANCE</th>
                </tr>
            </thead>
            <tbody>
                {this.state.servers.sort((a, b) => a.distance - b.distance).map(
                        server => 
                        <tr key={server.objectID}>
                            <td>{server.name}</td> 
                            <td>{server.distance}</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            {!this.props.location.token && !localStorage.getItem('AccessToken') &&
                <Redirect to={{pathname: '/Login'}} />
            }
        </div>
    );
    }
}