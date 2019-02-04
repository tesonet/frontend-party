import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import { IAppState } from '../interfaces';

class App extends React.Component<any, IAppState> {
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

    console.log(Routes);

    return (
      <Switch>
        {Routes}
        <Route component={this.redirectRender} />
      </Switch>
    );
  }

  private routeRender({ path, exact, secured, component: C, ...rest }: any, props: any) {
    if (secured) {
      if (!!localStorage.getItem('apitoken')) {
        return <C {...props} {...rest}/>;
      }

      return <Redirect to={'/login'} />;
    }

    return <C {...props} {...rest}/>;
  }

  private redirectRender() {
    if (!!localStorage.getItem('apitoken')) {
      return <Redirect to={"/list"} />;
    }
    return <Redirect to={"/login"} />;
  }
}

export default App;
