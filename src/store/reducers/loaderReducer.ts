import {SET_LOADING} from '../constants';

export function loaderReducer(
	state: boolean = false,
	action: { type: string, isLoading: boolean }
): boolean {
	if (action.type === SET_LOADING) {
		return action.isLoading;
	}
	return state;
}
