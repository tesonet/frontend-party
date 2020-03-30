import {CLEAR_ERRORS, SET_ERRORS} from '../constants';

export interface IErrorsState {
	isLoginError?: boolean;
}

export function errorsReducer(
	state: IErrorsState = {},
	action: { type: string, payload?: Partial<IErrorsState> }
): IErrorsState {
	if (action.type === SET_ERRORS) {
		return {...state, ...action?.payload};
	} else if (action.type === CLEAR_ERRORS) {
		return {};
	}
	return state;
}
