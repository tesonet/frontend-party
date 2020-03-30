import {authHeader, isLoggedIn} from '../authentication';

describe('authentication.ts', () => {
	const setup = () => {
		const token = '1111';
		jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
			.mockImplementationOnce(() => token);
		return {token};
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('isLoggedIn', () => {
		it('should return false if token in localStorage is not set', () => {
			expect(isLoggedIn()).toBe(false);
		});

		it('should return true if token is set in localStorage', () => {
			setup();
			expect(isLoggedIn()).toBe(true);
		});
	});

	describe('authHeader', () => {
		it('should return undefined if token in localStorage is not set', () => {
			expect(authHeader()).toBe(undefined);
		});

		it('should return correct authentication header if token is set', () => {
			const {token} = setup();
			expect(authHeader()).toEqual({'Authorization': `Bearer ${token}`});
		});
	});
});



