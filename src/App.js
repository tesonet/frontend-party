import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';


const App = () => (
 <div>
  <div className="ui container">
    <Route path = "/" exact component = {HomePage}/>
    </div>
    <div>
    <Route path = "/login" exact component = {LoginPage}/>
    </div>
    </div>
)

export default App;
