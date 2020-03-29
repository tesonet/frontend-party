import React from 'react';
import {Loader} from '../../components/molecules/Loader/Loader';
import {IReduxState} from '../../store';
import {Redirect, Router} from '@reach/router';
import {PrivateRoute} from '../../components/molecules/PrivateRoute/PrivateRoute';
import {DEFAULT, LOGIN, SERVERS} from '../../utils/routes';
import {ServersList} from '../ServersList/ServersList';
import {Login} from '../Login/Login';
import {useSelector} from 'react-redux';
import {Header} from '../../components/organisms/Header/Header';
import {isLoggedIn} from '../../utils/authentication';

function Navigation(props: any) {
	return (
		<React.Fragment>
			{isLoggedIn() && <Header/>}
			{props.children}
		</React.Fragment>
	);
}

export function App() {
	const isLoading = useSelector((state: IReduxState) => state.isLoading);
	return (
		<React.Fragment>
			<Router>
				<Navigation path={DEFAULT}>
					<PrivateRoute path={SERVERS} component={ServersList}/>
					<Redirect default noThrow from={DEFAULT} to={isLoggedIn() ? SERVERS : LOGIN}/>
				</Navigation>
				<Login path={LOGIN}/>
			</Router>
			<Loader isLoading={isLoading}/>
		</React.Fragment>
	);
}