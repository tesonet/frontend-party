import { Action } from '@ngrx/store';

export const ActionTypes = {
	SERVER_LIST: '[Server list] Server list',
	SERVER_LIST_SUCCESS: '[Server list] Server list success',
	SERVER_LIST_FAILED: '[Server list] Server list failed'
};

export class ServerListAction implements Action {
	type = ActionTypes.SERVER_LIST;
	constructor() { }
}

export class ServerListSuccessAction implements Action {
	type = ActionTypes.SERVER_LIST_SUCCESS;
	constructor(public payload: any) { }
}

export class ServerListFailedAction implements Action {
	type = ActionTypes.SERVER_LIST_FAILED;
	constructor(public payload: any) { }
}

export type Actions
	= ServerListAction
	| ServerListSuccessAction
	| ServerListFailedAction
