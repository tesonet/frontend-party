import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import Login from './components/Login/Login';
import Servers from './components/ServersList/Servers';

import './styles/index.scss';

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/servers" component={Servers} />
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
