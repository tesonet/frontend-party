import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.redirectRender = this.redirectRender.bind(this);
    this.routeRender = this.routeRender.bind(this);
  }

  public render() {
    const Routes = routes.map((route: any) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={this.routeRender.bind(this, route)}
      />
    ));

    return (
      <Switch>
        {Routes}
        <Route component={this.redirectRender} />
      </Switch>
    );
  }

  private routeRender({ path, exact, component: C, ...rest }: any, props: any) {
    return <C {...props} {...rest}/>;
  }

  private redirectRender() {
    return <Redirect to={'/login'} />;
  }
}

export default App;
