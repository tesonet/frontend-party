import {IServersState} from '../reducers/serversReducer';
import {ServerActions} from '../enums';
import {authHeader} from '../../utils/authHeader';

export function setServers(servers: IServersState) {
	return {
		type: ServerActions.SetServers,
		payload: servers,
	};
}

export function fetchServers() {
	return async (dispatch: any) => {
		const response = await fetch('http://playground.tesonet.lt/v1/servers', {
			method: 'GET',
			headers: authHeader()
		});
		if (response?.ok) {
			const servers = await response.json();
			dispatch(setServers(servers));
			return servers;
		}
	};
}