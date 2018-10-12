import React, { Component } from 'react';
import './App.scss';
import LoginWindow from './Login/loginWindow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginWindow/>
      </div>
    );
  }
}

export default App;
