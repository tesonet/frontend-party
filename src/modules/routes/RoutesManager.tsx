import * as React from 'react';
import { Route, Switch } from 'react-router';

import { routes } from './duck/routes';

const RoutesManager = () => (
  <React.Fragment>
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact || true}
          component={route.component}
        />
      ))}
    </Switch>
  </React.Fragment>
);

export { RoutesManager };
