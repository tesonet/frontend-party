import React from 'react';
import { Switch, Route } from 'react-router';
import LogInPage from './features/login/login.page';
import ServerPage from './features/servers/server.page';
import { NotFoundPage } from './features/not.found/not.found.page';

class Application extends React.Component {
	public render() {
		return (
			<Switch>
				<Route exact path="/log-in" component={LogInPage} />
				<Route exact path="/" component={ServerPage} />
				<Route component={NotFoundPage}/>
			</Switch>
		);
	}
}

export default Application;
