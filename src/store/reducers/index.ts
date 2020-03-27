import {combineReducers} from 'redux';
import {serversReducer} from './serversReducer/serversReducer';
import {UserActions} from './userReducer/enums';

const appReducer = combineReducers({
	servers: serversReducer
});

const rootReducer = (state: any, action: any) => {
	if (action.type === UserActions.Logout) {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;