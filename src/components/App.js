import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import LoginPage from './Login/LoginPage';
import ResultPage from './Result/ResultPage';
import '../sass/app.scss';

const App = () => {
  return(
    <div className="new-app">
      <Router history={history}>
        <div>
          <Route path="/" exact component={LoginPage} />
          <Route path="/result" exact component={ResultPage} />
        </div>
      </Router>
    </div>
  );
};

export default App;
