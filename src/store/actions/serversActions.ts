import {ServerActions} from '../reducers/serversReducer/enums';
import {IServersState} from '../reducers/serversReducer/serversReducer';

export function setServers(servers: IServersState) {
	return (dispatch: any) => {
		// Implement servers fetching logic
		return dispatch({
			type: ServerActions.SetServers,
			payload: servers,
		});
	};
}