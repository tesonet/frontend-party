import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import ServerList from './components/ServerList';

const App: React.FC = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/server/">Server</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={LoginPage} />
      <Route path="/server/" component={ServerList} />
    </div>
  </Router>
);

export default App;
