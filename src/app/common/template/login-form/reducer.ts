import { Action } from '@ngrx/store';
import * as login from './action';

export interface State {
	payload: any;
	loading: boolean;
}

const initialState: State = {
	payload: null,
	loading: false
};

function handleLoginSuccess(state: State, action: Action): State {
	console.log(state, action);
	return state;
	// const { type, cards } = action.payload;
	// return Object.assign({}, state, { [type.toLowerCase()]: cards });
}

function handleLoginFailed(state: State, action: Action): State {
	console.log(state, action);
	return state;
	// const { type, cards } = action.payload;
	// return Object.assign({}, state, { [type.toLowerCase()]: cards });
}

export function reducer(state = initialState, action: Action): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN_SUCCESS:
			return handleLoginSuccess(state, action);
		case login.ActionTypes.LOGIN_FAILED:
			return handleLoginFailed(state, action);
		default:
			return state;
	}
}
