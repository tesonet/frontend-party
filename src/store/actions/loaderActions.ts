import {SET_LOADING} from '../constants';

export function setLoading(isLoading: boolean) {
	return {
		isLoading,
		type: SET_LOADING,
	}
}