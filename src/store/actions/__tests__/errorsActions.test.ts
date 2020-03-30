import {CLEAR_ERRORS, SET_ERRORS} from '../../constants';
import {clearErrors, setErrors} from '../errorsActions';

describe('errorsActions.ts', () => {
	describe('setErrors', () => {
		it('should return correct action creator', () => {
			const errors = {isLoginError: true};
			const result = setErrors(errors);
			expect(result).toEqual({type: SET_ERRORS, payload: errors})
		});
	});

	describe('clearErrors', () => {
		it('should return correct action creator', () => {
			const result = clearErrors();
			expect(result).toEqual({type: CLEAR_ERRORS})
		});
	});
});
