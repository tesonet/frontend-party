import * as React from 'react';
import ApplicationLoading from './ApplicationLoader';
import LoginRoute from './routes/LoginRoute';
import NavigationContainer from './navigation/NavigationContainer';
import ServersRoute from './routes/ServersRoute';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { IState } from '../reducers/index';
import { connect, Provider } from 'react-redux';
import { store } from '../store';

interface IApplicationRootProps {
  authorized: boolean;
  initializing: boolean;
}

const BrowserRoutes = (props: IApplicationRootProps) => (
  <BrowserRouter>
    {props.initializing ? (
      <ApplicationLoading />
    ) : (
      <Switch>
        <Route path='/login' component={LoginRoute} />
        {props.authorized ? (
          <NavigationContainer>
            <Route exact path='/' component={ServersRoute} />
          </NavigationContainer>
        ) : (
          <Redirect to='/login' />
        )}
      </Switch>
    )}
  </BrowserRouter>
);

const mapStateToProps = (state: IState) => ({
  authorized: state.token.authorized,
  initializing: state.initialization.initializing,
});

const ConnectedBrowserRoutes = connect(mapStateToProps)(
  BrowserRoutes,
);

export default () => (
  <Provider store={store}>
    <ConnectedBrowserRoutes />
  </Provider>
);
