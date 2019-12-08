import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../redux/store';

type StateProps = ReturnType<typeof mapStateToProps>;

interface PrivateRouteProps extends RouteProps {
  component:
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
}

const PrivateRouteComponent: React.FC<PrivateRouteProps & StateProps> = ({ component: Component, loggedIn, loading, ...rest }) => {
  const handleRender = (routeProps: RouteComponentProps) => {
    if (loggedIn && !loading) {
      return <Component {...routeProps} />;
    }

    return <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />;
  };

  return <Route {...rest} render={handleRender} />;
};

const mapStateToProps = (state: AppState) => ({ 
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading
 });

const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);
export default PrivateRoute;
