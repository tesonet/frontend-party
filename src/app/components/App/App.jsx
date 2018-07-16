import React from 'react';
import { Route, Switch } from 'react-router-dom';
import serverRoutes from '../../../servers/servers.route';

const App = () => (
    <Switch>
        <Route exact path={serverRoutes.path} component={serverRoutes.component} />
    </Switch>
);

export default App;