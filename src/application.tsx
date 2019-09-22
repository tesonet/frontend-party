import React from 'react';
import { match as IMatch, Switch, Route } from 'react-router';
import LogInPage from './features/login/login.page';
import routeStore from './routing/store';
import ServerPage from './features/servers/server.page';

interface IProps {
	match: IMatch<any>;
}

class Application extends React.Component<IProps> {
	public componentDidMount() {
		if(this.props.match.isExact) {
			routeStore.changeRouteToDefault();
		}
	}

	public render() {
		return (
			<Switch>
				<Route exact path="/log-in" component={LogInPage} />
				<Route exact path="/servers" component={ServerPage} />
			</Switch>
		);
	}
}

export default Application;
