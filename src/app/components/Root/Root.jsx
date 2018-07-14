import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import appRoutes from '../../app.routes';
import serverRoutes from '../../../servers/servers.route';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route path={appRoutes.login.path} component={props => (
                <appRoutes.login.component {...props} redirectTo={serverRoutes.path} />
            )} />
            <Route exact path={appRoutes.notFound.path} component={appRoutes.notFound.component} />
            <Route exact path={serverRoutes.path} component={serverRoutes.component} />
        </Switch>
    </BrowserRouter>
);

export default Root;
