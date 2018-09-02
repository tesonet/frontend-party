import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const BackGround = {
  backgroundImage :"url('https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg')",
  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '900px'
}

const App = () => (
  
 <div style ={BackGround} >
  <div className="ui container">
    <Route path = "/" exact component = {HomePage}/>
    </div>
    <div>
    <Route path = "/login" exact component = {LoginPage}/>
    </div>
    </div>
)

export default App;
