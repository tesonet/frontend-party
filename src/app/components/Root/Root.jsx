import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import appRoutes from '../../app.routes';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route path={appRoutes.login.path} component={appRoutes.login.component} />
            <Route exact path={appRoutes.notFound.path} component={appRoutes.notFound.component} />
        </Switch>
    </BrowserRouter>
);

export default Root;
