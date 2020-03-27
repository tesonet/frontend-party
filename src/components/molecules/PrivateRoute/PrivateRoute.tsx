import React from 'react';
import {TOKEN} from '../../../utils/constants';
import {Redirect, Route} from 'react-router-dom';

export function PrivateRoute({component: Component, ...rest}: any) {
	const token = localStorage.getItem(TOKEN);
	return (
		<Route {...rest} render={props => token ?
			<Component {...rest} /> :
			<Redirect to={{pathname: '/login', state: {from: props.location}}}/>
		}/>
	);
}