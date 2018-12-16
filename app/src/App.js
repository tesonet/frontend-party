import React, { Component } from 'react';
import './App.scss';
import Login from './components/Login';
import Servers from './components/Servers';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container-fluid">
            <Route exact path="/" component={Login} />
            <Route path="/servers" component={Servers} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
