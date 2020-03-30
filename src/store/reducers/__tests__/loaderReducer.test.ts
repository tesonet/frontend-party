import {loaderReducer} from '../loaderReducer';
import {SET_LOADING} from '../../constants';

describe('loaderReducer.ts', () => {
	it('should return default state', () => {
		const result = loaderReducer(undefined,{type: 'RANDOM', isLoading: true});
		expect(result).toBe(false);
	});

	it('should return payload state', () => {
		const result = loaderReducer(false,{type: SET_LOADING, isLoading: true});
		expect(result).toBe(true);
	});
});
