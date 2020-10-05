import { combineReducers } from 'redux';
import { userAuthentication, fetchData } from './reducers';

export default combineReducers({
	userAuthentication,
	fetchData,
});
