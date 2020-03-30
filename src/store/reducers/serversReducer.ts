import {SET_SERVERS} from '../constants';

export interface IServerEntry {
	name: string;
	distance: string;
}

export type IServersState = Array<IServerEntry>;

export function serversReducer(
	state: IServersState = [],
	action: { type: string, payload: Array<IServerEntry> }
): IServersState {
	if (action.type === SET_SERVERS) {
		return action.payload;
	}
	return state;
}
