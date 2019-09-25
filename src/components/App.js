import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoginPage from './LoginPage';
import ServersListPage from './ServersListPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import './App.scss';

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <PublicRoute path="/login" exact component={LoginPage} />
                <PrivateRoute path="/" exact component={ServersListPage} />
            </BrowserRouter>
        </div>
    );
};

export default App;
