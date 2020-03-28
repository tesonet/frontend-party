import {SET_SERVERS} from '../constants';

export type IServersState = Array<any>;

export function serversReducer(
	state: IServersState = [],
	action: { type: string, payload: any }
): IServersState {
	if (action.type === SET_SERVERS) {
		return action.payload;
	}
	return state;
}
