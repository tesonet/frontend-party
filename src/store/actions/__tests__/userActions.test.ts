import {mockFetchReturn} from '../../../__mocks__/apiMock';
import {loginUser, logoutUser} from '../userActions';
import {CLEAR_ERRORS, LOGOUT, SET_ERRORS, SET_LOADING} from '../../constants';
import {LOGIN, SERVERS} from '../../../utils/routes';
import {LOCAL_STORAGE_TOKEN} from '../../../utils/constants';

const api = require('../../../utils/api');
const router = require('@reach/router');

const USER = {username: 'aaa', password: '123'};
const TOKEN = '1111';

describe('userActions.ts', () => {
	const setup = () => {
		router.navigate = jest.fn();
		return {dispatch: jest.fn(), navigate: router.navigate};
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('loginUser', () => {
		const setupLoginUser = (ok = true) => {
			const {dispatch, navigate} = setup();
			api.httpLoginUser = jest.fn().mockReturnValue(
				mockFetchReturn(ok, {token: TOKEN}),
			);
			const httpLoginUser = api.httpLoginUser;
			return {dispatch, navigate, httpLoginUser};
		};

		it('should set localStorage user token', async () => {
			jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
			const {dispatch} = setupLoginUser(true);
			await loginUser(USER)(dispatch);
			expect(localStorage.setItem).toHaveBeenCalledWith(LOCAL_STORAGE_TOKEN, TOKEN);
		});

		it('should call dispatch with correct action creators if http call passed', async () => {
			const {dispatch, navigate, httpLoginUser} = setupLoginUser(true);
			await loginUser(USER)(dispatch);
			expect(httpLoginUser).toHaveBeenCalledWith(USER);
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: true});
			expect(navigate).toHaveBeenCalledWith(SERVERS);
			expect(dispatch).toHaveBeenCalledWith({type: CLEAR_ERRORS});
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: false});
		});

		it('should call dispatch with correct action creators if http call failed', async () => {
			const {dispatch, navigate} = setupLoginUser(false);
			await loginUser({username: null, password: null})(dispatch);
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: true});
			expect(navigate).not.toHaveBeenCalled();
			expect(dispatch).toHaveBeenCalledWith({type: SET_LOADING, isLoading: false});
			expect(dispatch).toHaveBeenCalledWith({type: SET_ERRORS, payload: {isLoginError: true}});
		});
	});

	describe('logoutUser', () => {
		it('should call dispatch with correct action creators', async () => {
			jest.spyOn(Object.getPrototypeOf(window.localStorage), 'removeItem');
			const {navigate} = setup();
			const result = await logoutUser()();
			expect(localStorage.removeItem).toHaveBeenCalledWith(LOCAL_STORAGE_TOKEN);
			expect(navigate).toHaveBeenCalledWith(LOGIN);
			expect(result).toEqual({type: LOGOUT});
		})
	});
});
