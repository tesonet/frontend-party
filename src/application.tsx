import React from 'react';
import { LogInPage } from 'features/login/login.page';
import { NotFoundPage } from 'features/not.found/not.found.page';
import { Route, Switch } from 'react-router';
import { ServerPage } from 'features/servers/server.page';

export class Application extends React.Component {
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
