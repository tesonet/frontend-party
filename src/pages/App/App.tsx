import React from 'react';
import {Loader} from '../../components/atoms/Loader/Loader';
import {IReduxState} from '../../store';
import {Redirect, Router} from '@reach/router';
import {PrivateRoute} from '../../components/molecules/PrivateRoute/PrivateRoute';
import {DEFAULT, LOGIN, SERVERS} from '../../utils/routes';
import {ServersList} from '../ServersList/ServersList';
import {Login} from '../Login/Login';
import {useSelector} from 'react-redux';

export function App() {
	const isLoading = useSelector((state: IReduxState) => state.isLoading);
	return (
		<React.Fragment>
			<Router>
				<PrivateRoute path={SERVERS} component={ServersList}/>
				<Login path={LOGIN}/>
				<Redirect default noThrow from={DEFAULT} to={LOGIN}/>
			</Router>
			<Loader isLoading={isLoading}/>
		</React.Fragment>
	);
}