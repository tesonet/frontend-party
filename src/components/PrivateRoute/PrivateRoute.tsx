import { useSelector } from 'react-redux';
import { GlobalReduxState } from '../../types';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: any
}

const PrivateRoute = (props: PrivateRouteProps) => {

    const { component: Component, ...rest } = props;

    const { authenticated } = useSelector((state: GlobalReduxState) => ({
        authenticated: state.authReducer.authenticated
    }));

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                authenticated ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;