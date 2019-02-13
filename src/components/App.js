import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { createGlobalStyle } from 'styled-components';

import LoginWindow from './LoginWindow';
import ResultPage from './ResultPage';

const App = () => {
  return(
    <div className="new-app">
      <GlobalStyle />
      <Router history={history}>
        <div>
          <Route path="/" exact component={LoginWindow} />
          <Route path="/result" exact component={ResultPage} />
        </div>
      </Router>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  *,*:before,*:after{
    box-sizing: border-box;
  }

  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    background: #fff;
  }

  p{
    line-heigt: 100%;
    font-size: 16px;
  }
`;

export default App;
