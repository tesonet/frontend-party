import {serversReducer} from '../serversReducer';
import {SET_SERVERS} from '../../constants';

const servers = [
	{name: 'a', distance: '1'},
	{name: 'b', distance: '2'},
	{name: 'c', distance: '3'},
];

describe('serversReducer.ts', () => {
	it('should return default state', () => {
		const result = serversReducer(undefined,{type: 'RANDOM', payload: servers});
		expect(result).toEqual([]);
	});

	it('should return SET_SERVERS payload state', () => {
		const actionCreator = {type: SET_SERVERS, payload: servers};
		const result = serversReducer([], actionCreator);
		expect(result).toEqual(actionCreator.payload);
	});
});
