import { combineReducers } from '@ngrx/store';
import { reducer as loginReducer } from './component/login-form/reducer';

export const commonReducers = {
	login: loginReducer
};

const reducers = combineReducers(Object.assign({}, commonReducers));

export function rootReducer(state, action) {
	return reducers(state, action)
}
