import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import ServersListPage from './ServersListPage';
import PrivateRoute from './PrivateRoute';

import './App.scss';

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Route path="/login" exact component={LoginPage} />
                <PrivateRoute path="/" exact component={ServersListPage} />
            </BrowserRouter>
        </div>
    );
};

export default App;
