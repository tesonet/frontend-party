import {errorsReducer} from '../errorsReducer';
import {CLEAR_ERRORS, SET_ERRORS} from '../../constants';

describe('errorsReducer.ts', () => {
	it('should return default state', () => {
		const defaultState = {isLoginError: true};
		const result = errorsReducer(defaultState,{type: 'RANDOM'});
		expect(result).toEqual(defaultState);
	});

	it('should return SET_ERRORS payload state', () => {
		const actionCreator = {type: SET_ERRORS, payload: {isLoginError: false}};
		const result = errorsReducer(undefined, actionCreator);
		expect(result).toEqual(actionCreator.payload);
	});

	it('should return CLEAR_ERRORS state', () => {
		const actionCreator = {type: CLEAR_ERRORS};
		const result = errorsReducer({isLoginError: true}, actionCreator);
		expect(result).toEqual({});
	});
});
