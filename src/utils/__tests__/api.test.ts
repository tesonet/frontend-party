import {httpFetchServers, httpLoginUser} from '../api';

const authentication = require('../authentication');

describe('api.ts', () => {
	beforeEach(() => {
		window.fetch = jest.fn();
		authentication.authHeader = jest.fn();
	});

	describe('httpLoginUser', () => {
		it('should call with provided arguments', async () => {
			const user = {username: 'aaaa', password: '123'};
			const params = ['http://playground.tesonet.lt/v1/tokens', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(user)
			}];
			await httpLoginUser(user);
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(...params);
		});
	});

	describe('httpFetchServers', () => {
		it('should call authHeader function', async () => {
			await httpFetchServers();
			expect(authentication.authHeader).toHaveBeenCalledTimes(1);
		});

		it('should call fetch servers with correct url', async () => {
			const params = ['http://playground.tesonet.lt/v1/servers', {
				method: 'GET',
				headers: undefined,
			}];
			await httpFetchServers();
			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(...params);
		});
	});
});



