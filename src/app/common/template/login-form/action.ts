import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOGIN: '[Login] Login',
	LOGIN_SUCCESS: '[Login] Login success',
	LOGIN_FAILED: '[Login] Login failed',
};

export class LoginAction implements Action {
	type = ActionTypes.LOGIN;
	constructor(public payload: any) { }
}

export class LoginSuccessAction implements Action {
	type = ActionTypes.LOGIN_SUCCESS;
	constructor(public payload: any) { }
}

export class LoginFailedAction implements Action {
	type = ActionTypes.LOGIN_FAILED;
	constructor(public payload: any) { }
}

export type Actions
	= LoginAction
	| LoginSuccessAction
	| LoginFailedAction;
