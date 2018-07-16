import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WithAuth from '../WithAuth/WithAuth';
import App from '../../../app/components/App/App';
import appRoutes from '../../app.routes';
import serverRoutes from '../../../servers/servers.route';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={appRoutes.login.path} component={props => (
                <appRoutes.login.component {...props} redirectTo={serverRoutes.path} />
            )} />
            <Route path="/" component={WithAuth(App)} />
        </Switch>
    </BrowserRouter>
);

export default Root;
