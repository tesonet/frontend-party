import {combineReducers} from 'redux';
import {serversReducer} from './serversReducer';
import {LOGOUT} from '../constants';
import {loaderReducer} from './loaderReducer';
import {errorsReducer} from './errorsReducer';

const appReducer = combineReducers({
	isLoading: loaderReducer,
	servers: serversReducer,
	errors: errorsReducer,
});

const rootReducer = (state: any, action: any) => {
	if (action.type === LOGOUT) {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;