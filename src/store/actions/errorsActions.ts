import {CLEAR_ERRORS, SET_ERRORS} from '../constants';
import {IErrorsState} from '../reducers/errorsReducer';

export function setErrors(errors: Partial<IErrorsState>) {
	return {
		type: SET_ERRORS,
		payload: errors,
	};
}

export function clearErrors() {
	return {
		type: CLEAR_ERRORS,
	}
}