// @flow
import React from 'react';
import { Router } from '@reach/router';

import 'fonts/index.css';

import PrivateRoute from 'routes/PrivateRoute';

import Auth from 'screens/Auth';
import ServerList from 'screens/ServerList';


const App = () => (
    <Router>
        <Auth path="login" />
        <PrivateRoute
            path="/"
            component={ServerList}
        />
    </Router>
);

export default App;
