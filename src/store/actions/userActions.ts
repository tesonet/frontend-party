import {TOKEN} from '../../utils/constants';
import {navigate} from '@reach/router';
import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from '../constants';
import {setLoading} from './loaderActions';
import {LOGIN, SERVERS} from '../../utils/routes';
import {httpLoginUser, ILoginUserProps} from '../../utils/api';

export function loginUser({username, password}: ILoginUserProps) {
	return async (dispatch: any) => {
		dispatch(setLoading(true));
		const resp = await httpLoginUser({username, password});
		if (resp?.ok) {
			const {token} = await resp.json();
			localStorage.setItem(TOKEN, token);
			await navigate(SERVERS);
			dispatch(setLoading(false));
			return {type: LOGIN_SUCCESS};
		}
		dispatch(setLoading(false));
		return {type: LOGIN_ERROR};
	};
}

export function logoutUser() {
	return async (dispatch: any) => {
		dispatch(setLoading(false));
		localStorage.removeItem(TOKEN);
		await navigate(LOGIN);
		dispatch(setLoading(false));
		return {type: LOGOUT};
	};
}