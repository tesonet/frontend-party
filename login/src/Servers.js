import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import logo from './logo.PNG';
import axios from 'axios';

export default class Servers extends Component {
    constructor(props) {
      super(props);
      this.state = {
          servers: []
      };
  }

  componentDidMount() {
    axios({
       "async": true,
       "crossDomain": true,
       "url": "http://playground.tesonet.lt/v1/servers",
       "method": "GET",
       "headers": {
         "Authorization": "Bearer f9731b590611a5a9377fbd02f247fcdf"
     }})
         .then(response => {
             const servers = response.data;
             this.setState({servers});
         })
     }

  render() {
    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Server</th>
                    <th scope="col">Distance</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.servers.map(
                        server => 
                        <tr>
                            <td>{server.name}</td> 
                            <td>{server.distance}</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
        </div>
    );
    }
}