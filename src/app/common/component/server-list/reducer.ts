import { Action } from '@ngrx/store';
import * as login from './action';
import * as ComponentText from './component-text';
import * as messageType from '../../../global/model/message';
import * as serverType from './model';

export interface State {
	response: any;
	message: messageType.IMessage;
	loading: boolean;
	data: Array<serverType.IServer>;
	sortedData: Array<serverType.IServer>;
}

const initialState: State = {
	response: null,
	message: null,
	loading: false,
	data: null,
	sortedData: null
};

function handleServerList(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			message: null,
			loading: true
		}
	);
}

function handleServerListSuccess(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			loading: false,
			data: action.payload,
			sortedData: sortData(action.payload)
		}
	);
}

function handleServerListFailed(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			response: action.payload,
			message: {
				'type': 'failed',
				'text': ComponentText.MESSAGE_LIST.serverListFailed
			},
			loading: false
		}
	)
}

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {
		case login.ActionTypes.SERVER_LIST:
			return handleServerList(state, action);
		case login.ActionTypes.SERVER_LIST_SUCCESS:
			return handleServerListSuccess(state, action);
		case login.ActionTypes.SERVER_LIST_FAILED:
			return handleServerListFailed(state, action);
		default:
			return state;
	}
}

function sortData(data) {
	const sortedData = data.sort(function (a, b) {
		return a.distance - b.distance || a.name.toLowerCase() - b.name.toLowerCase();
	});
	return sortedData;
}
