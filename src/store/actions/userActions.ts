import {LOCAL_STORAGE_TOKEN} from '../../utils/constants';
import {navigate} from '@reach/router';
import {LOGOUT} from '../constants';
import {setLoading} from './loaderActions';
import {LOGIN, SERVERS} from '../../utils/routes';
import {httpLoginUser, ILoginUserProps} from '../../utils/api';
import {clearErrors, setErrors} from './errorsActions';

export function loginUser({username, password}: ILoginUserProps) {
	return async (dispatch: any) => {
		dispatch(setLoading(true));
		const resp = await httpLoginUser({username, password});
		if (resp.ok) {
			const {token} = await resp.json();
			localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
			await navigate(SERVERS);
			dispatch(setLoading(false));
			return dispatch(clearErrors());
		}
		dispatch(setLoading(false));
		return dispatch(setErrors({isLoginError: true}));
	};
}

export function logoutUser() {
	return async () => {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN);
		await navigate(LOGIN);
		return {type: LOGOUT};
	};
}