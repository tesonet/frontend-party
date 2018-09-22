import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Servers from './Servers/Servers.js';
import Login from './Login/Login.js';
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

