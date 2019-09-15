import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export function PrivateRoute({component: Component, ...rest}) {
    return (
       <Route {...rest} render={props => (
           localStorage.getItem('auth_token') ? <Component {...props}/> : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
       )} />
    );
}