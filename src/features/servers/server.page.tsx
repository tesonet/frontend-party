import React from 'react';
import ServerList from './list/server.list';
import { authStore } from '../authentication/store';
import { Header } from './views/header';
import { observer, Provider } from 'mobx-react';
import { routeStore } from 'routing/store';
import { serverListStore } from './store';

export const ServerPage = observer(class ServerPage extends React.Component {
	public componentDidMount() {
		if (!authStore.isLoggedIn) {
			return routeStore.changeRoute('/log-in')
		}
		serverListStore.fethcServers();
	}

	public render() {
		return (
			<Provider serverListStore={serverListStore}>
				<div>
					<Header onClick={this.handleLogout}/>
					<ServerList />
				</div>
			</Provider>
		)
	}

	private handleLogout = () => {
		authStore.logOutUser();
	}
});
