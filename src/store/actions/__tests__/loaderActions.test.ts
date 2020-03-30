import {SET_LOADING} from '../../constants';
import {setLoading} from '../loaderActions';

describe('loaderActions.ts', () => {
	describe('setLoading', () => {
		it('should return correct action creator', () => {
			const result = setLoading(true);
			expect(result).toEqual({type: SET_LOADING, isLoading: true});
		});
	});
});
