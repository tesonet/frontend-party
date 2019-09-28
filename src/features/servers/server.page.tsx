import React from 'react';
import routeStore from '../../routing/store';
import authStore from '../authentication/store';
import { observer, Provider } from 'mobx-react';
import serverListStore from './store';
import ServerList from './list/server.list';
import { Header } from './views/header';

const ServerPage = observer(class ServerPage extends React.Component {
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

export default ServerPage;
