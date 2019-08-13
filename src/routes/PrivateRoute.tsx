import React from "react";
import {
    Route,
    Redirect,
    RouteProps,
    RouteComponentProps,
} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    auth: boolean;
}

const PrivateRoute: React.SFC<PrivateRouteProps> = ({
    component: Component,
    auth,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                localStorage.getItem("authToken") || auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
