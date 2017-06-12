import { combineReducers } from '@ngrx/store';
import { reducer as loginReducer } from './component/login-form/reducer';
import { reducer as serverListReducer } from './component/server-list/reducer';

export const commonReducers = {
	login: loginReducer,
	serverList: serverListReducer
};

const reducers = combineReducers(Object.assign({}, commonReducers));

export function rootReducer(state, action) {
	return reducers(state, action)
}
