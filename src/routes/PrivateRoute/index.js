// @flow
import * as React from 'react';
import { Redirect } from '@reach/router';


type PropsT = {
    component: React.Component
};

const PrivateRoute = ({
    component: Component,
    ...props
}: PropsT) => {
    const isAuth = false;

    if (isAuth) {
        return (
            <Component
                {...props}
            />
        );
    }

    return (
        <Redirect
            to="login"
            noThrow
        />
    );
};

export default PrivateRoute;
