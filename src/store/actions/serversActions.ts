import {IServersState} from '../reducers/serversReducer';
import {SET_SERVERS} from '../constants';
import {setLoading} from './loaderActions';
import {httpFetchServers} from '../../utils/api';

export function setServers(servers: IServersState) {
	return {
		type: SET_SERVERS,
		payload: servers,
	};
}

export function fetchServers() {
	return async (dispatch: any) => {
		dispatch(setLoading(true));
		const resp = await httpFetchServers();
		if (resp?.ok) {
			const servers = await resp.json();
			dispatch(setServers(servers));
		}
		dispatch(setLoading(false));
		return {};
	};
}