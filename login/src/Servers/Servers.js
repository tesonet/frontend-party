import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import './Servers.css';
import logoDark from './logoDark.PNG';
import axios from 'axios';

export default class Servers extends Component {
    constructor(props) {
      super(props);
      this.state = {
          servers: [],
          redirect: ''
      };
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
             servers.sort((a, b) => a.distance - b.distance)
             this.setState({servers});
         })
     }
    handleLogout() {
        localStorage.removeItem('AccessToken');
        this.setState({redirect: true});
    }

    handleSorting(e){
        let sorted; 
        if(e === "sortByServerDesc"){sorted = this.state.servers.sort((a, b) => a.name.localeCompare(b.name))}
        if(e === "sortByServerAsc"){sorted = this.state.servers.sort((a, b) => b.name.localeCompare(a.name))}
        if(e === "sortByDistanceDesc"){sorted = this.state.servers.sort((a, b) => a.distance - b.distance)}
        if(e === "sortByDistanceAsc"){sorted = this.state.servers.sort((a, b) => b.distance - a.distance)}
        this.setState({ servers: sorted})
    }
    render() {
        const redirect = this.state.redirect;
        if(redirect === true){
            return <Redirect to={{pathname: '/Login'}} />
        }
        return (
        <div>
            <img src={logoDark} alt='Testio'/>
            <span id="Logout" onClick={this.handleLogout.bind(this)}> <span className="glyphicon glyphicon-log-out"></span> Logout</span>
            <table className="table">
            <thead className="thead-light">
                <tr >
                    <th scope="col">SERVER 
                        <span className="glyphicon glyphicon-triangle-top" id="sortByServerDesc" onClick={this.handleSorting.bind(this, "sortByServerDesc")}></span>
                        <span className="glyphicon glyphicon-triangle-bottom" id="sortByServerAsc" onClick={this.handleSorting.bind(this,"sortByServerAsc")}></span>
                    </th>
                    <th scope="col">DISTANCE
                        <span className="glyphicon glyphicon-triangle-top" id="sortByDistanceDesc" onClick={this.handleSorting.bind(this,"sortByDistanceDesc")}></span>
                        <span className="glyphicon glyphicon-triangle-bottom" id="sortByDistanceAsc" onClick={this.handleSorting.bind(this, "sortByDistanceAsc")}></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {this.state.servers.map((server,i,j,k) => 
                        <tr key={i}>
                            <td key={j}>{server.name}</td> 
                            <td key={k}>{server.distance}</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            {!this.props.location.token && !localStorage.getItem('AccessToken') &&
                <Redirect to={{pathname: '/Login'}} />
            }
        </div>
    )}
}

