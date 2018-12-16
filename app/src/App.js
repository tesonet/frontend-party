import React, { Component } from 'react';
import Login from './components/Login';
import ServerItems from './components/ServerItems';
import { BrowserRouter, Route } from 'react-router-dom';
import './sass/base.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div className='container-fluid'>
            <Route exact path='/' component={Login} />
            <Route path='/servers' component={ServerItems} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
