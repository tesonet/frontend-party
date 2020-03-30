import React, {ComponentType} from 'react';
import {LOCAL_STORAGE_TOKEN} from '../../../utils/constants';
import {Redirect, RouteComponentProps} from '@reach/router';
import {LOGIN} from '../../../utils/routes';

interface IPrivateRouterProps extends RouteComponentProps {
	component: ComponentType<any>;
}

export function PrivateRoute({component: Component, ...rest}: IPrivateRouterProps) {
	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
	if (token) {
		return <Component {...rest} />;
	}
	return <Redirect to={LOGIN} noThrow/>;
}