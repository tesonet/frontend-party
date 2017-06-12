import { Action } from '@ngrx/store';
import * as login from './action';
import * as ComponentText from './component-text';
import * as messageType from '../../../global/model/message';

export interface State {
	response: any;
	token: string;
	message: messageType.IMessage;
	loading: boolean;
}

const initialState: State = {
	response: null,
	token: null,
	message: null,
	loading: false
};

function handleLogin(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			message: null,
			loading: true
		}
	);
}

function handleLoginSuccess(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			token: action.payload.token,
			message: {
				'type': 'success',
				'text': ComponentText.MESSAGE_LIST.loginSuccessful
			},
			loading: false
		}
	);
}

function handleLoginFailed(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			response: action.payload,
			message: {
				'type': 'failed',
				'text': ComponentText.MESSAGE_LIST.loginFailed
			},
			loading: false
		}
	)
}
function handleLoginClear(state: State, action: Action): State {
	return Object.assign(
		{},
		state,
		{
			response: null,
			token: null,
			message: null,
			loading: false
		}
	)
}

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN:
			return handleLogin(state, action);
		case login.ActionTypes.LOGIN_SUCCESS:
			return handleLoginSuccess(state, action);
		case login.ActionTypes.LOGIN_FAILED:
			return handleLoginFailed(state, action);
		case login.ActionTypes.LOGIN_CLEAR:
			return handleLoginClear(state, action);
		default:
			return state;
	}
}
