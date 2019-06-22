// @flow
import * as React from 'react';
import { Redirect } from '@reach/router';
import { useSelector } from 'react-redux';


type PropsT = {
    component: React.Component
};

const PrivateRoute = ({
    component: Component,
    ...props
}: PropsT) => {
    const auth = useSelector(state => state.auth);

    if (auth.token) {
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
