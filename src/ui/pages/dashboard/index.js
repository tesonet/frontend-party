import React from 'react';

// React router
import { Switch, Route } from 'react-router-dom';

// Pages
import Servers from './servers';
import DashboardHome from './home';
import NotFound from '../notFound';

export default class Dashboard extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/dashboard' component={DashboardHome}/>
                <Route exact path='/dashboard/servers' component={Servers}/>
                <Route path='/dashboard' component={NotFound}/>
            </Switch>
        )
    }
}
