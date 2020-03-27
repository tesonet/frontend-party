import {ServerActions} from './enums';

export type IServersState = Array<any>;

export function serversReducer(
	state: IServersState = [],
	action: { type: string, payload: any }
): IServersState {
	if (action.type === ServerActions.SetServers) {
		console.log(action.payload);
		return action.payload;
	}
	if (action.type === ServerActions.ClearServers) {
		return [];
	}
	return state;
}
