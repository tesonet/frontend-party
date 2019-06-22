// @flow
import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import store from 'store';

import 'fonts/index.css';

import routes from 'routes';
import PrivateRoute from 'routes/PrivateRoute';

import Auth from 'screens/Auth';
import ServerList from 'screens/ServerList';


const App = () => (
    <Provider store={store}>
        <Router>
            <Auth path={routes.auth} />
            <PrivateRoute
                path={routes.home}
                component={ServerList}
            />
        </Router>
    </Provider>
);

export default App;
