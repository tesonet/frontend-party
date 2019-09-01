import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import ServerList from './components/ServerList';

const App: React.FC = () => (
  <Router>
    <>
      <Route path="/" exact component={LoginPage} />
      <Route path="/server/" component={ServerList} />
    </>
  </Router>
);

export default App;
