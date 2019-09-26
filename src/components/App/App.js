import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import ServersListPage from '../ServersListPage/ServersListPage';
import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';
import Page404 from '../Page404/Page404';
import './App.scss';

const App = () => {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/login" exact component={LoginPage} />
                    <PrivateRoute path="/" exact component={ServersListPage} />
                    <PrivateRoute component={Page404} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
