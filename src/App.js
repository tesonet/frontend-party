import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import {Servers} from './Servers';
import {Login} from './Login';

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/login" component={Login} />
          <Route component={Servers}/>
      </Switch>
  </Router>
  );
}

export default App;
