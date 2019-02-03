import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { setAuthToken } from './components/utils/auth/setAuthToken';
import './assets/sass/main.scss';

import Login from './components/auth/Login';
import Servers from './components/servers/Servers';
import NotFound from './components/utils/common/NotFound';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/servers" component={Servers} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default App;
