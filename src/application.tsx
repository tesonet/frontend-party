import React from 'react';
import { Switch, Route } from 'react-router';
import LogIn from './features/login/Login';

const Application: React.FC = () => {
	return (
			<Switch>
				<Route exact path="/" component={LogIn}/>
			</Switch>
	);
}

export default Application;
