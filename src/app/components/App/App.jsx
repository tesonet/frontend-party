import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import serverRoutes from '../../../servers/servers.route';

const App = () => (
    <Switch>
        <Route exact path="/" render={() => <Redirect to={serverRoutes.path} />} />
        <Route exact path={serverRoutes.path} component={serverRoutes.component} />
    </Switch>
);

export default App;