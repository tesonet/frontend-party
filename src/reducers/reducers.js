import {
	USER_AUTH_PENDING,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILED,
	RETRIEVED_DATA,
	USER_LOGOUT,
} from '../actions/constants';

const initialUserState = {
	isPending: false,
	isLoggedIn: false,
	wrongCredentials: false,
};

export const userAuthentication = (state = initialUserState, action) => {
	switch (action.type) {
		case USER_AUTH_PENDING:
			return { ...state, wrongCredentials: false, isPending: true };
		case USER_AUTH_SUCCESS:
			return { ...state, isLoggedIn: true, isPending: false };
		case USER_AUTH_FAILED:
			return { ...state, wrongCredentials: true, isPending: false };
		case USER_LOGOUT:
			return { ...state, isLoggedIn: false };
		default:
			return state;
	}
};

const initialServerList = {
	servers: [],
};

export const fetchData = (state = initialServerList, action) => {
	switch (action.type) {
		case RETRIEVED_DATA:
			return { state, servers: action.payload };
		default:
			return state;
	}
};
