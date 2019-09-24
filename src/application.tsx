import React from 'react';
import { match as IMatch, Switch, Route } from 'react-router';
import LogInPage from './features/login/login.page';
import ServerPage from './features/servers/server.page';

interface IProps {
	match: IMatch<any>;
}

class Application extends React.Component<IProps> {
	public render() {
		return (
			<Switch>
				<Route exact path="/log-in" component={LogInPage} />
				<Route exact path="/" component={ServerPage} />
			</Switch>
		);
	}
}

export default Application;
