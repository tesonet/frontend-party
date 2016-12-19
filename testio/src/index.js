import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss } from  'react-router';

import './css/dist/bootstrap.css';
import './css/dist/style.css';

import LoginView from './views/LoginView';
import ProtectedView from './views/ProtectedView';
import NotFound from './views/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={LoginView} />
        <Match pattern="/servers" component={ProtectedView} />
        <Miss component={NotFound}/>
        </div>
    </BrowserRouter>
  )
}


render(<Root />, document.getElementById('root'));
