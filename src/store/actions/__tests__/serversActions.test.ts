import {fetchServers, setServers} from '../serversActions';
import {SET_LOADING, SET_SERVERS} from '../../constants';
import {mockFetchReturn} from '../../../__mocks__/apiMock';

const api = require('../../../utils/api');

const servers = [
	{name: 'a', distance: '1'},
	{name: 'b', distance: '2'},
];

describe('serversActions.ts', () => {
	const setup = (ok = true) => {
		const dispatch = jest.fn();
		api.httpFetchServers = jest.fn().mockReturnValue(
			mockFetchReturn(ok, servers),
		);
		return {dispatch};
	};

	describe('setServers', () => {
		it('should return correct action creator', () => {
			const servers = [{name: 'a', distance: '1'}];
			const result = setServers(servers);
			expect(result).toEqual({
				type: SET_SERVERS,
				payload: servers,
			});
		});
	});

	describe('fetchServers', () => {
		it('should call dispatch 3 times with proper action creators', async () => {
			const {dispatch} = setup();
			await fetchServers()(dispatch);
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: true});
			expect(dispatch).toHaveBeenCalledWith({type: SET_SERVERS, payload: servers});
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: false});
		});

		it('should call dispatch 2 times with proper action creators', async () => {
			const {dispatch} = setup(false);
			await fetchServers()(dispatch);
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: true});
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: false});
		});
	});
});
